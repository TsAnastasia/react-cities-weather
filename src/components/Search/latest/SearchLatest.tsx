import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/redux";
import { deleteFromLatest } from "../../../redux/citySlice";
import ValueBox from "../../ValueBox/ValueBox";

const SearchLatest = () => {
  const cities = useAppSelector((state) => state.cityReducer.latest);
  const dispatch = useDispatch();

  const handleDelete = (item: { city: string; id: string }) => () => {
    dispatch(deleteFromLatest(item.id));
  };

  return cities.length > 0 ? (
    <ul>
      {cities.map((item) => (
        <ValueBox
          key={item.id}
          value={item.city}
          onDelete={handleDelete(item)}
        ></ValueBox>
      ))}
    </ul>
  ) : (
    <p>latest</p>
  );
};

export default SearchLatest;
