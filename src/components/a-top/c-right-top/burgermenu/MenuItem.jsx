import styles from "./MenuItem.module.css";
import React from "react";

const MenuItem = ({ label }) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuElementOne}>
        <p>{label}</p>
      </div>
      <div className={styles.menuElementTwo}></div>
    </div>
  );
};

export default MenuItem;
