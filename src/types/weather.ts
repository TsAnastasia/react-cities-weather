export type WeatherGroupType =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Atmosphere"
  | "Clear"
  | "Clouds";

export type WeatherIconCodes =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

export interface IWeather {
  coord: { lon: number; lat: number };
  weather: {
    id: 802;
    main: WeatherGroupType;
    description: string;
    icon: WeatherIconCodes;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherInfo {
  city: string;
  country: string;
  iconId: WeatherIconCodes;
  temp: number;
  description: string;
  feels_like?: number;
  pressure?: number;
  wind?: number;
  humidity?: number;
  sunrise?: string;
  sunset?: string;
}
