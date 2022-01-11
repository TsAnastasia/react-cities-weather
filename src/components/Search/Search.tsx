import React, { FormEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { addLatest, setCity } from "../../redux/citySlice";
import SearchLatest from "./latest/SearchLatest";

const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setCity(value));
    dispatch(addLatest({ city: value, id: Date() }));
  };

  const handleClear = () => setValue("");

  return (
    <section>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={value}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClear}>
          clear
        </button>
        <button type="submit">Find out the weather</button>

        <SearchLatest />
      </form>
    </section>
  );
};

export default Search;
