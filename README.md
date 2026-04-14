# 🌦️ Weather App

A simple full-stack weather application that allows users to get current weather data for a specific city or automatically detect their location.

---
## 🚀 Live Demo

👉 https://weather-app-client-two.vercel.app/

---

## 🚀 Features

- 🔍 Search weather by city name  
- 📍 Automatic location detection (via IP)  
- ⚡ Fast responses with Redis caching  
- 🛡️ Rate limiting for API protection  
- 🌐 REST API backend  
- 🎨 Modern UI (React + Tailwind)

---

## 🧰 Tech Stack

### 🖥️ Backend
- Node.js  
- Express  
- Axios  
- CORS  
- express-rate-limit  
- Redis (optional caching)  
- dotenv  

### 💻 Frontend
- React  
- Vite  
- TypeScript  
- TailwindCSS  
- shadcn/ui  
- lucide-react  
- next-themes  

---

## 🌍 APIs Used

### 📍 IP Geolocation API
Used to automatically detect user location  
https://ipapi.co/json/

### 🌦️ Weather API (Visual Crossing)
Used to fetch weather data by city  
https://weather.visualcrossing.com/

---

## 🛡️ Rate Limiting

- 100 requests per 15 minutes per IP  
- Protects API from abuse  

---

## 📌 Notes

- Redis is optional but recommended for performance  
- App works even if Redis is unavailable  
- Backend uses ES Modules (`type: module`)  
- Make sure to add your API key in `.env`  

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ihor-Hav/Weather-App
cd Weather-App
```
### 2. Install dependencies
```bash
cd backend
npm install

cd frontend
npm install
```

### 3. Set up environment variables

Backend .env
API_KEY=your_weather_api_key
REDIS_URL=your_redis_url (optional)

Frontend .env
VITE_API_BASE_URL=http://localhost:3000

### 4. Run the project
```bash
cd backend
npm run start:dev

cd frontend
npm run dev

```
