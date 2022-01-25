import { AnyAction } from "@reduxjs/toolkit";
import { ICity } from "../types/city";
import reducer, { setCity, addLatest, deleteFromLatest } from "./citySlice";

const citiesTest: { [key: string]: ICity } = {
  city1: {
    name: "London",
    id: "1",
  },
  city2: {
    name: "Praga",
    id: "2",
  },
};

describe("citySlice", () => {
  it("return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({
      city: "",
      latest: [],
    });
  });

  it("set the city - london", () => {
    const city = "London";
    expect(reducer(undefined, setCity(city)).city).toEqual(city);
  });

  it("add new city in an empty latest", () => {
    const city = citiesTest.city1;
    expect(reducer(undefined, addLatest(city)).latest).toEqual([city]);
  });

  it("add new city in an existing latest", () => {
    const { city1, city2 } = citiesTest;
    expect(
      reducer({ city: "", latest: [city2] }, addLatest(city1)).latest
    ).toEqual([city2, city1]);
  });

  it("add existing city in the latest", () => {
    const { city1, city2 } = citiesTest;
    expect(
      reducer({ city: "", latest: [city1, city2] }, addLatest(city1)).latest
    ).toEqual([city2, city1]);
  });

  it("delete city from the latest", () => {
    const { city1, city2 } = citiesTest;
    expect(
      reducer({ city: "", latest: [city1, city2] }, deleteFromLatest(city1))
        .latest
    ).toEqual([city2]);
  });
});
