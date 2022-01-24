import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/redux";
import { deleteFromLatest, setCity } from "../../../redux/citySlice";
import { ICity } from "../../../types/city";
import ValueBox from "../../ValueBox/ValueBox";
import styles from "./searchLatest.module.scss";

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
    <ul className={styles.latest}>
      {cities
        .slice(0, 10)
        .reverse()
        .map((item) => (
          <li key={item.id} className={styles.item}>
            <ValueBox
              value={item.name}
              onDelete={handleDelete(item)}
              onClick={handleCityClick(item)}
            ></ValueBox>
          </li>
        ))}
    </ul>
  ) : (
    <></>
  );
};

export default SearchLatest;
