import WeatherIcon from "./WeatherIcon";
import {
  formatHour,
  formatCelsius,
  fahrenheitToCelsius,
} from "../../lib/utils";

const WeatherHour = ({ hour }: any) => {
  return (
    <div className="flex flex-col items-center gap-3  min-w-25 bg-slate-900/10 py-2 rounded-lg hover:scale-105 hover:bg-slate-800/10 transition-all duration-300">
      <p>{formatHour(String(hour.datetime))}</p>
      <p>
        <WeatherIcon className="w-10 h-auto" icon={hour.icon}></WeatherIcon>
      </p>
      <p className="font-semibold">
        {formatCelsius(fahrenheitToCelsius(hour.temp))}
      </p>
    </div>
  );
};

export default WeatherHour;
