import React, { FC } from "react";
import { weatherAPI } from "../../API/weatherAPI";

const Weather: FC<{ city: string }> = ({ city }) => {
  const { data } = weatherAPI.useGetWeatherByCityQuery(city);

  return (
    <section>
      <p>weather's info</p>
    </section>
  );
};

export default Weather;
