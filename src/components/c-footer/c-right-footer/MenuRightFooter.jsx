import {
  GiAbstract053,
  GiAbstract050,
  GiAbstract098,
  GiAbstract078,
  GiAce,
} from "react-icons/gi";

import styles from "./MenuRightFooter.module.css";
const MenuRightFooter = () => {
  return (
    <div className={styles.end}>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAce className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract078 className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract098 className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract050 className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract053 className={styles.icon} />
      </div>
    </div>
  );
};

export default MenuRightFooter;

// TbPlaylist
