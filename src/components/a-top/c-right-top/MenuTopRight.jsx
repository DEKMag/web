import "./MenuTopRight.module.css";
import Clock from "./Clock";
import { useState } from "react";
import MenuItem from "./burgermenu/MenuItem";
import { GiHamburger } from "react-icons/gi";
import styles from "./MenuTopRight.module.css";

const MenuTopRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.left}>
      <div className={`${styles.date} ${styles.shadowMenu}`}>
        <Clock />
      </div>
      <div
        className={`${styles.menu} ${styles.shadowMenu}`}
        onClick={toggleMenu}
      >
        <div className={styles.toggle} onClick={toggleMenu}>
          <GiHamburger className={styles.icon} />
        </div>
        {isOpen && (
          <div className={styles.menuItems}>
            <MenuItem label="One" />
            <MenuItem label="Two" />
            <MenuItem label="Fhree" />
            <MenuItem label="Four" />
            <MenuItem label="Six" />
            <MenuItem label="Seven" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuTopRight;
