import React from "react";

import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <p className={styles.title}>City's weather app</p>
  </header>
);

export default Header;
