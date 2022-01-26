import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherInfo from "./WeatherInfo";

describe("Weather Info", () => {
  it("render weather info only with necessary data", () => {
    render(
      <WeatherInfo
        city={"test city"}
        country={"SC"}
        iconId={"01d"}
        temp={10}
        description={"cloudy"}
      />
    );
    screen.debug();

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /test city/
    );
    expect(screen.getByText(/cloudy/)).toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();

    expect(screen.getByText(/Feels like/).parentNode).toHaveTextContent("?");
    expect(screen.getByText(/Pressure/).parentNode).toHaveTextContent("?");
    expect(screen.getByText(/Wind/).parentNode).toHaveTextContent("?");
    expect(screen.getByText(/Humidity/).parentNode).toHaveTextContent("?");
    expect(screen.getByText(/Sunrise/).parentNode).toHaveTextContent("?");
    expect(screen.getByText(/Sunset/).parentNode).toHaveTextContent("?");
  });

  it("render weather info with some data", () => {
    render(
      <WeatherInfo
        city={"test city"}
        country={"SC"}
        iconId={"01d"}
        temp={-10}
        description={"cloudy"}
        feels_like="-12"
        wind="3 m/s"
        humidity="75 %"
      />
    );
    screen.debug();

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /test city/
    );
    expect(screen.getByText(/cloudy/)).toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();

    expect(screen.getByText(/Feels like/).parentNode).toHaveTextContent("-12");
    expect(screen.getByText(/Pressure/).parentNode).toHaveTextContent("?");
    expect(screen.getByText(/Wind/).parentNode).toHaveTextContent("3 m/s");
    expect(screen.getByText(/Humidity/).parentNode).toHaveTextContent("75 %");
    expect(screen.getByText(/Sunrise/).parentNode).toHaveTextContent("?");
    expect(screen.getByText(/Sunset/).parentNode).toHaveTextContent("?");
  });

  it("render weather info with all data", () => {
    render(
      <WeatherInfo
        city={"test city"}
        country={"SC"}
        iconId={"01d"}
        temp={-1}
        description={"cloudy"}
        feels_like="-5"
        pressure="1032 hPa"
        wind="5 m/s"
        humidity="75 %"
        sunrise="8:50"
        sunset="17:58"
      />
    );
    screen.debug();

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /test city/
    );
    expect(screen.getByText(/cloudy/)).toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();

    expect(screen.getByText(/Feels like/).parentNode).toHaveTextContent("-5");
    expect(screen.getByText(/Pressure/).parentNode).toHaveTextContent(
      "1032 hPa"
    );
    expect(screen.getByText(/Wind/).parentNode).toHaveTextContent("5 m/s");
    expect(screen.getByText(/Humidity/).parentNode).toHaveTextContent("75 %");
    expect(screen.getByText(/Sunrise/).parentNode).toHaveTextContent("8:50");
    expect(screen.getByText(/Sunset/).parentNode).toHaveTextContent("17:58");
  });
});
