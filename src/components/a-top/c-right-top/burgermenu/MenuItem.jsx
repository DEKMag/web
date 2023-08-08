import styles from './MenuItem.module.scss';

const MenuItem = ({ label, icon }) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuElementOne}>
        <p>{label}</p>
      </div>
      <div className={styles.menuElementTwo}>{icon}</div>
    </div>
  );
};

export default MenuItem;
