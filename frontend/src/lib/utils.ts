import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fahrenheitToCelsius(tempF: number) {
  return Math.floor(((tempF - 32) * 5) / 9);
}

export function formatCelsius(tempF: number) {
  return `${tempF}°C`;
}

export function formatHour(unformattedTime: string) {
  const [h = "--", m = "--"] = unformattedTime.split(":");
  return `${h}:${m}`;
}

export function getDay(date: string, locale = "en-UK") {
  return new Date(JSON.parse(date)).toLocaleString(locale, { day: "2-digit" });
}

export function formatDayName(date: string, locale = "en-UK") {
  return new Date(JSON.parse(date)).toLocaleDateString(locale, {
    weekday: "short",
  });
}

export function formatMonthName(date: string, locale = "en-UK") {
  return new Date(JSON.parse(date)).toLocaleDateString(locale, {
    month: "long",
  });
}
