import { useState, useEffect } from "react";
import { fahrenheitToCelsius, formatCelsius } from "../../lib/utils";
import type { Weather, Day } from "../../types/weather";
import type { WeatherIconKey } from "./WeatherIcon";
import WeatherDay from "./WeatherDay";
import WeatherIcon from "./WeatherIcon";
import WeatherHour from "./WeatherHour";

type WeatherCardProps = {
  weather: Weather;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const [activeDate, setActiveDate] = useState(weather.days[0]);
  const [days, setDays] = useState(weather.days);

  useEffect(() => {
    setDays(weather.days);
    setActiveDate(weather.days[0]);
  }, [weather]);

  const onChangeActiveDate = (day: Day) => {
    setActiveDate(day);
  };

  return (
    <div className="p-10">
      {" "}
      <div className="flex flex-col gap-10 mt-4">
        <div className="my-5">
          <h2 className="text-xl font-bold">
            Location: {" " + weather.resolvedAddress}
          </h2>
          <div className="flex gap-5 mt-5">
            <div>
              <WeatherIcon
                className="w-50"
                icon={activeDate.icon as WeatherIconKey}
              />
            </div>
            <div>
              <div className="flex gap-5">
                <div className="text-6xl font-">
                  {formatCelsius(fahrenheitToCelsius(activeDate.temp))}
                </div>
                <div>{activeDate.conditions}</div>
              </div>
              <div className="flex gap-5 text-xl">
                <div>
                  Max:
                  {" " + formatCelsius(fahrenheitToCelsius(activeDate.tempmax))}
                </div>
                <div>
                  Min:
                  {" " + formatCelsius(fahrenheitToCelsius(activeDate.tempmin))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-zinc-500/20 dark:bg-zinc-800 p-3 rounded-xl">
                  💨 Wind: {activeDate.windspeed} km/h
                </div>
                <div className="bg-zinc-500/20 dark:bg-zinc-800 p-3 rounded-xl">
                  💧 Humidity: {activeDate.humidity}%
                </div>
                <div className="bg-zinc-500/20 dark:bg-zinc-800 p-3 rounded-xl">
                  ☔ Rain: {activeDate.precipprob}%
                </div>
                <div className="bg-zinc-500/20 dark:bg-zinc-800 p-3 rounded-xl">
                  🌡 Max:{" "}
                  {formatCelsius(fahrenheitToCelsius(activeDate.tempmax))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-3">
          {days.map((day, index) => (
            <WeatherDay
              key={index}
              day={day}
              isActiveDay={activeDate.datetime === day.datetime}
              onClick={() => onChangeActiveDate(day)}
            />
          ))}
        </div>

        <div className="flex gap-1 mt-5 overflow-x-auto pb-3">
          {activeDate.hours.map((hour, index) => (
            <WeatherHour key={index} hour={hour}></WeatherHour>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
