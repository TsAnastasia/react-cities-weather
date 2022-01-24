import React from "react";
import styles from "./intro.module.scss";

const Intro = () => (
  <section className={styles.intro}>
    <h1 className={styles.title}>City's weather app</h1>
    <p className={styles.description}>Find out weather in your city</p>
  </section>
);

export default Intro;
