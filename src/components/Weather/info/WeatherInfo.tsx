import React, { FC } from "react";
import { IWeatherInfo } from "../../../types/weather";

const infoItems: { key: keyof IWeatherInfo; title: string }[] = [
  { key: "temp", title: "Temperature" },
  {key: "pressure", title: "Pressure"},
  { key: "sunrise", title: "Sunrise" },
  { key: "sunset", title: "Sunset" },
];

const WeatherInfo: FC<IWeatherInfo> = (weather) => {
  return (
    <>
      <h2>
        Place: <span>{weather.city}</span>, <span>{weather.country}</span>
      </h2>
      <ul>
        {infoItems.map((item) => (
          <li key={item.key}>
            <p>
              {item.title}: <span>{weather[item.key]}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WeatherInfo;
