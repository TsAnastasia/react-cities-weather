import React, { FC } from "react";
import { IWeatherInfo } from "../../../types/weather";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";

import styles from "./weatherInfo.module.scss";

const infoItems: { key: keyof IWeatherInfo; title: string }[] = [
  { key: "temp", title: "Temperature" },
  { key: "feels_like", title: "Feels like" },
  { key: "pressure", title: "Pressure" },
  { key: "wind", title: "Wind" },
  { key: "humidity", title: "Humidity" },
  { key: "sunrise", title: "Sunrise" },
  { key: "sunset", title: "Sunset" },
];

const WeatherInfo: FC<IWeatherInfo> = (weather) => {
  return (
    <>
      <h2 className={styles.place}>
        <span>{weather.city}</span>, <span>{weather.country}</span>
      </h2>
      <div className={styles.short}>
        <WeatherIcon code={weather.iconId} />
        <div className={styles.shortInfo}>
          <p className={styles.temp}>
            <span className={styles.tempValue}>{weather.temp}</span> &#8451;
          </p>
          <p className={styles.desc}>{weather.description}</p>
        </div>
      </div>
      <ul>
        {infoItems.map((item) => (
          <li key={item.key}>
            <p>
              {item.title}: <span>{weather[item.key] || "?"}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WeatherInfo;
