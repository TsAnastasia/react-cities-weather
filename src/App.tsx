import React from "react";
import Intro from "./components/Intro/Intro";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";

const App = () => (
  <div className="App">
    <header>header</header>
    <main>
      <Intro />
      <Search />
      <Weather />
    </main>
    <footer>footer</footer>
  </div>
);

export default App;
