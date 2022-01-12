import React from "react";
import Intro from "./components/Intro/Intro";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import { useAppSelector } from "./hooks/redux";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";

const App = () => {
  const { city } = useAppSelector((state) => state.cityReducer);
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Intro />
        <section>
          <Search />
          {city && <Weather city={city} />}
        </section>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
