import WeatherIcon from "./WeatherIcon";
import {
  fahrenheitToCelsius,
  formatDayName,
  formatMonthName,
  getDay,
} from "../../lib/utils";

const WeatherDay = ({
  day,
  isActiveDay,
  onClick,
}: {
  day: any;
  isActiveDay: boolean;
  onClick: () => void;
}) => {
  const date = new Date(day.datetime);

  return (
    <div
      className={`flex flex-col items-center text-center rounded-lg min-w-40 transition-all pt-3 pb-2
        duration-300 ease-out ${isActiveDay ? "bg-linear-to-br from-amber-400 to-orange-500" : "bg-zinc-800/20 hover:scale-105 hover:shadow-lg"}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <p className="text-lg">{formatDayName(JSON.stringify(date))}</p>
        <p className="text-2xl">{getDay(JSON.stringify(date))}</p>
        <p className="text-sm">{formatMonthName(JSON.stringify(date))}</p>
      </div>
      <p>
        <WeatherIcon
          className={`w-12 h-12 mx-auto ${isActiveDay ? "drop-shadow-lg" : ""}`}
          icon={day.icon}
        ></WeatherIcon>
      </p>
      <div className="flex justify-between mt-3 gap-3">
        <p className="flex flex-col">
          <span className="opacity-70">Min</span>
          <span className="font-semibold">
            {fahrenheitToCelsius(day.tempmin)}°
          </span>
        </p>
        <p className="flex flex-col">
          <span className="opacity-70">Max</span>
          <span className="font-semibold">
            {fahrenheitToCelsius(day.tempmax)}°
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDay;
