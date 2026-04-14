export type WeatherIconKey = keyof typeof conditions;

const conditions = {
  snow: (className: string) => (
    <img className={className} src="/1st Set - Color/snow.png" />
  ),
  rain: (className: string) => (
    <img className={className} src="/1st Set - Color/rain.png" />
  ),
  fog: (className: string) => (
    <img className={className} src="/1st Set - Color/fog.png" />
  ),
  wind: (className: string) => (
    <img className={className} src="/1st Set - Color/wind.png" />
  ),
  cloudy: (className: string) => (
    <img className={className} src="/1st Set - Color/cloudy.png" />
  ),
  hail: (className: string) => (
    <img className={className} src="/1st Set - Color/hail.png" />
  ),
  "partly-cloudy-day": (className: string) => (
    <img className={className} src="/1st Set - Color/partly-cloudy-day.png" />
  ),
  "partly-cloudy-night": (className: string) => (
    <img className={className} src="/1st Set - Color/partly-cloudy-night.png" />
  ),
  "clear-day": (className: string) => (
    <img className={className} src="/1st Set - Color/clear-day.png" />
  ),
  "clear-night": (className: string) => (
    <img className={className} src="/1st Set - Color/clear-night.png" />
  ),
  "rain-snow-showers-day": (className: string) => (
    <img
      className={className}
      src="/1st Set - Color/rain-snow-showers-day.png"
    />
  ),
  "rain-snow-showers-night": (className: string) => (
    <img
      className={className}
      src="/1st Set - Color/rain-snow-showers-night.png"
    />
  ),
  "rain-snow": (className: string) => (
    <img className={className} src="/1st Set - Color/rain-snow.png" />
  ),
  "showers-day": (className: string) => (
    <img className={className} src="/1st Set - Color/showers-day.png" />
  ),
  "showers-night": (className: string) => (
    <img className={className} src="/1st Set - Color/showers-night.png" />
  ),
  sleet: (className: string) => (
    <img className={className} src="/1st Set - Color/sleet.png" />
  ),
  "snow-showers-day": (className: string) => (
    <img className={className} src="/1st Set - Color/snow-showers-day.png" />
  ),
  "snow-showers-night": (className: string) => (
    <img className={className} src="/1st Set - Color/snow-showers-night.png" />
  ),
  "thunder-rain": (className: string) => (
    <img className={className} src="/1st Set - Color/thunder-rain.png" />
  ),
  "thunder-showers-day": (className: string) => (
    <img className={className} src="/1st Set - Color/thunder-showers-day.png" />
  ),
  "thunder-showers-night": (className: string) => (
    <img
      className={className}
      src="/1st Set - Color/thunder-showers-night.png"
    />
  ),
  thunder: (className: string) => (
    <img className={className} src="/1st Set - Color/thunder.png" />
  ),
} as const;

const WeatherIcon = ({
  icon,
  className,
}: {
  icon: WeatherIconKey;
  className: string;
}) => {
  const Icon = conditions[icon] ?? conditions.cloudy;

  return <div>{Icon(className)}</div>;
};

export default WeatherIcon;
