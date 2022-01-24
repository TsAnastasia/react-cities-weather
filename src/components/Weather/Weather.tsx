import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import React, { FC } from "react";
import { weatherAPI } from "../../API/weatherAPI";
import { formatNumberToDayTime } from "../../utils/date";
import WeatherInfo from "./info/WeatherInfo";

const Weather: FC<{ city: string }> = ({ city }) => {
  const { data, isLoading, error } = weatherAPI.useGetWeatherByCityQuery(city);

  return isLoading ? (
    <p>Loading ...</p>
  ) : !!error ? (
    ((error as FetchBaseQueryError).data as any).message ? (
      <p>{((error as FetchBaseQueryError).data as any).message}</p>
    ) : (
      <p>API error {}</p>
    )
  ) : !data ? (
    <p>no data</p>
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
