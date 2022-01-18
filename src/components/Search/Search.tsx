import React, { FormEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { addLatest, setCity } from "../../redux/citySlice";
import SearchLatest from "./latest/SearchLatest";
import styles from "./search.module.scss";

const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setCity(value));
    dispatch(addLatest({ name: value, id: Date() }));
  };

  const handleClear = () => setValue("");

  return (
    <form onSubmit={handleSearchSubmit} className={styles.search}>
      <div className={styles.row}>
        <div className={styles.input}>
          <input
            className={styles.text}
            type="text"
            name="city"
            placeholder="Enter city"
            value={value}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleClear}
            className={styles.clear}
          />
        </div>
        <button type="submit" className={styles.find}>
          Find out
        </button>
      </div>
      <SearchLatest />
    </form>
  );
};

export default Search;
