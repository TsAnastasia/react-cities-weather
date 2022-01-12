import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/redux";
import { deleteFromLatest, setCity } from "../../../redux/citySlice";
import { ICity } from "../../../types/city";
import ValueBox from "../../ValueBox/ValueBox";

const SearchLatest = () => {
  const cities = useAppSelector((state) => state.cityReducer.latest);
  const dispatch = useDispatch();

  const handleDelete = (item: ICity) => () => {
    dispatch(deleteFromLatest(item));
  };

  const handleCityClick = (item: ICity) => () => {
    dispatch(setCity(item.name));
  };

  return cities.length > 0 ? (
    <ul>
      {cities
        .slice(0, 10)
        .reverse()
        .map((item) => (
          <li key={item.id}>
            <ValueBox
              value={item.name}
              onDelete={handleDelete(item)}
              onClick={handleCityClick(item)}
            ></ValueBox>
          </li>
        ))}
    </ul>
  ) : (
    <p>latest</p>
  );
};

export default SearchLatest;
