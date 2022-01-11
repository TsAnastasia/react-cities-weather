import React from "react";
import Intro from "./components/Intro/Intro";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import { useAppSelector } from "./hooks/redux";

const App = () => {
  const { city } = useAppSelector((state) => state.cityReducer);
  return (
    <div className="App">
      <header>header</header>
      <main>
        <Intro />
        <Search />
        {city && <Weather city={city} />}
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
