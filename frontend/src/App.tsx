import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import WeatherCard from "./components/weather/WeatherCard";
import { toast } from "sonner";
import type { Weather } from "../src/types/weather";
import bg from "./assets/clouds-sky.jpg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [city, setCity] = useState<string>("London");

  useEffect(() => {
    const initCity = async () => {
      try {
        const cityFromIp = await getCityByIP();

        setCity(cityFromIp);
        getWeather(cityFromIp);
      } catch (error) {
        console.log("Ip detected failed, fallback to default London");
      }
    };

    initCity();
  }, []);

  const getCityByIP = async () => {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.city;
  };

  const getWeather = async (custom_city: string) => {
    if (!custom_city) {
      toast.error("Input must be not empty!");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/weather?city=${custom_city}`,
      );
      const data = await response.json();
      if (response.status !== 200) {
        toast.error("Error occured while fetching, please check your input!");
        return;
      }

      setWeather(data);
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
  };

  return (
    <div
      className="p-5"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city or country"
        className="focus:visible:ring-2 focus:visible:ring-amber-400"
      ></Input>

      <Button
        className="
          mt-4
          bg-amber-400 text-black
          hover:bg-amber-300/80
          shadow-lg
          backdrop-blur
        "
        onClick={() => getWeather(city)}
      >
        Get Weather
      </Button>

      {weather && <WeatherCard weather={weather}></WeatherCard>}
    </div>
  );
}

export default App;
