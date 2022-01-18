import React from "react";

import styles from "./app.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import { useAppSelector } from "./hooks/redux";

const App = () => {
  const { city } = useAppSelector((state) => state.cityReducer);
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Intro />
        <section className={styles.info}>
          <Search />
          {city && <Weather city={city} />}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
