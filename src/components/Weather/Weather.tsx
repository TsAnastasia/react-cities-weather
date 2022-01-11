import React from "react";
import { weatherAPI } from "../../API/weatherAPI";

const Weather = () => {
  const { data } = weatherAPI.useGetWeatherByCityQuery("");

  return (
    <section>
      <p>weather's info</p>
    </section>
  );
};

export default Weather;
