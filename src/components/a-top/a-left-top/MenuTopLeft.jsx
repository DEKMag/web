import { useState } from 'react';
import Calendar from './Calendare';
import { TfiLinux } from 'react-icons/tfi';
import { NavLink } from 'react-router-dom';
import styles from './MenuTopLeft.module.scss';

const MenuTopLeft = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon((prevIcon) => (prevIcon === iconName ? null : iconName));
  };

  return (
    <nav className={styles.navStyles}>
      <div className={styles.menuTopLeft}>
        <div className={`${styles.menu} ${styles.shadowMenu}`}>
          <NavLink to={activeIcon === 'Linux' ? '/' : '/Card'}>
            <TfiLinux
              className={`${styles.icon} ${
                activeIcon === 'Linux' ? styles.activeIcon : ''
              }`}
              onClick={() => handleIconClick('Linux')}
              title="listCard"
            />
          </NavLink>
        </div>

        <div className={`${styles.date} ${styles.shadowMenu}`}>
          <Calendar />
        </div>
      </div>
    </nav>
  );
};

export default MenuTopLeft;
