import React, { FC } from "react";

import { WeatherIconCodes } from "../../types/weather";

import BrokenClouds from "./icons/BrokenClouds";
import ClearSkyDay from "./icons/ClearSkyDay";
import ClearSkyNight from "./icons/ClearSkyNight";
import Cloudy from "./icons/Cloudy";
import FewCloudsDay from "./icons/FewCloudsDay";
import FewCloudsNight from "./icons/FewCloudsNight";
import Mist from "./icons/Mist";
import Rain from "./icons/Rain";
import RainSmall from "./icons/RainSmall";
import Snow from "./icons/Snow";
import Storm from "./icons/Storm";

const WeatherIcon: FC<{ code?: WeatherIconCodes; color?: string }> = ({
  code,
  color = "#2a86f0",
}) => {
  switch (code) {
    case "01d":
      return <ClearSkyDay color={color} />;

    case "01n":
      return <ClearSkyNight color={color} />;

    case "02d":
      return <FewCloudsDay color={color} />;

    case "02n":
      return <FewCloudsNight color={color} />;

    case "03d":
    case "03n":
      return <Cloudy color={color} />;

    case "04d":
    case "04n":
      return <BrokenClouds color={color} />;

    case "09d":
    case "09n":
      return <RainSmall color={color} />;

    case "10d":
    case "10n":
      return <Rain color={color} />;

    case "11d":
    case "11n":
      return <Storm color={color} />;

    case "13d":
    case "13n":
      return <Snow color={color} />;

    case "50d":
    case "50n":
      return <Mist color={color} />;

    default:
      return <BrokenClouds color="#000000" />;
  }
};

export default WeatherIcon;
