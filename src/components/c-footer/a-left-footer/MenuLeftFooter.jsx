import {
  GiAbstract029,
  GiAbstract013,
  GiAbstract032,
  GiAbstract063,
  GiAbstract089,
} from "react-icons/gi";
import styles from "./MenuLeftFooter.module.css";
const MenuLeftFooter = () => {
  return (
    <div className={styles.end}>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract029 className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract013 className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract032 className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract063 className={styles.icon} />
      </div>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <GiAbstract089 className={styles.icon} />
      </div>
    </div>
  );
};

export default MenuLeftFooter;
