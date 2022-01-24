import React, { FC } from "react";

import { IWeatherInfo } from "../../../types/weather";
import PropertyIcon from "../../PropertyIcon/PropertyIcon";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";
import styles from "./weatherInfo.module.scss";

const infoItems: { key: keyof IWeatherInfo; title: string }[] = [
  { key: "feels_like", title: "Feels like" },
  { key: "pressure", title: "Pressure" },
  { key: "wind", title: "Wind" },
  { key: "humidity", title: "Humidity" },
  { key: "sunrise", title: "Sunrise" },
  { key: "sunset", title: "Sunset" },
];

const WeatherInfo: FC<IWeatherInfo> = (weather) => {
  return (
    <div className={styles.info}>
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
      <ul className={styles.properties}>
        {infoItems.map((item) => (
          <li key={item.key} className={styles.property}>
            <div className={styles.icon}>
              <PropertyIcon type={item.key} />
            </div>
            <p className={styles.name}>{item.title}</p>
            <p className={styles.value}>{weather[item.key] || "?"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherInfo;
