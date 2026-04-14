import express from "express";
import axios from "axios";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { createClient } from "redis";
import "dotenv/config";

const app = express();

app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

let client = null;
let redisReady = false;

async function initRedis() {
  try {
    if (!process.env.REDIS_URL) {
      console.log("Redis URL missing → skipping Redis");
      return;
    }

    client = createClient({
      url: process.env.REDIS_URL,
    });

    client.on("error", (err) => {
      console.log("Redis error:", err.message);
      redisReady = false;
    });

    await client.connect();
    redisReady = true;

    console.log("Redis connected");
  } catch (err) {
    console.log("Redis init failed → running without cache");
    client = null;
    redisReady = false;
  }
}

initRedis();

const WEATHER_API_KEY = process.env.API_KEY;
const DEFAULT_EXPIRATION = 3600;

app.get("/", (req, res) => {
  res.send("Weather API is running");
});

app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ error: "Please specify the city!" });
    }

    const redisKey = `city:${city}`;

    if (client && redisReady) {
      try {
        const cachedData = await client.get(redisKey);

        if (cachedData) {
          return res.json(JSON.parse(cachedData));
        }
      } catch (err) {
        console.log("Redis read failed, ignoring cache");
      }
    }

    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}`,
      {
        params: {
          key: WEATHER_API_KEY,
        },
      },
    );

    if (client && redisReady) {
      try {
        await client.setEx(
          redisKey,
          DEFAULT_EXPIRATION,
          JSON.stringify(response.data),
        );
      } catch (err) {
        console.log("Redis write failed, ignoring cache");
      }
    }

    return res.json(response.data);
  } catch (error) {
    console.log("API error:", error.message);
    return res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export default app;
