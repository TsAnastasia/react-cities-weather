import React from "react";
import { AUTHOR_LINK } from "../../utils/routes";

import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>
      &copy;{" "}
      <a
        href={AUTHOR_LINK}
        className={styles.author}
        target="_blank"
        rel="noreferrer"
      >
        Ana Ts
      </a>{" "}
      {`${new Date().getFullYear()}`}
    </p>
  </footer>
);

export default Footer;
