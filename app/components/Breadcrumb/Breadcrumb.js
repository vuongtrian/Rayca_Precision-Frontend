import React from "react";
import styles from "./Breadcrumb.module.css";

function Breadcrumb() {
  return (
    <nav className={styles.breadcrumb}>
      <ul>
        <li>
          <a href="#">Account</a>
          <span className={styles.separator}>/</span>
        </li>
        <li>
          <a href="#">Emails & Calendar</a>
          <span className={styles.separator}>/</span>
        </li>
        <li>
          <a href="#">julian@attio.com</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumb;
