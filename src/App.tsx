import React from "react";
import Intro from "./components/Intro/Intro";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import { useAppSelector } from "./hooks/redux";
import styles from "./app.module.scss";

const App = () => {
  const { city } = useAppSelector((state) => state.cityReducer);
  return (
    <div className={styles.app}>
      <header>header</header>
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
