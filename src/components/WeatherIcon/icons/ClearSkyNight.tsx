import React, { FC } from "react";

const ClearSkyNight: FC<{ color: string }> = ({ color }) => (
  <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      d="M50 90a40.0006 40.0006 0 0 1-36.9552-24.6927A40 40 0 1 1 90 50a40.047 40.047 0 0 1-40 40Z"
    />
  </svg>
);

export default ClearSkyNight;
