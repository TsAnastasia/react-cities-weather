import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import React, { FC } from "react";

import { weatherAPI } from "../../API/weatherAPI";
import { formatNumberToDayTime } from "../../utils/date";
import Loader from "../Loader/Loader";
import WeatherInfo from "./info/WeatherInfo";
import styles from "./weather.module.scss";

const Weather: FC<{ city: string }> = ({ city }) => {
  const { data, error, isFetching } = weatherAPI.useGetWeatherByCityQuery(city);

  return isFetching ? (
    <Loader />
  ) : !!error ? (
    ((error as FetchBaseQueryError).data as any).message ? (
      <p className={styles.error}>
        {((error as FetchBaseQueryError).data as any).message}
      </p>
    ) : (
      <p className={styles.error}>API error {}</p>
    )
  ) : !data ? (
    <p className={styles.error}>no data</p>
  ) : (
    <WeatherInfo
      city={data.name}
      country={data.sys.country}
      iconId={data.weather[0].icon}
      temp={data.main.temp}
      description={data.weather[0].description}
      feels_like={`${data.main.feels_like}`}
      pressure={`${data.main.pressure} hPa`}
      wind={`${data.wind.speed} m/s`}
      humidity={`${data.main.humidity} %`}
      sunrise={formatNumberToDayTime(data.sys.sunrise)}
      sunset={formatNumberToDayTime(data.sys.sunset)}
    />
  );
};

export default Weather;
