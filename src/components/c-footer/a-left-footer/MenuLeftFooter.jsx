import { NavLink } from 'react-router-dom';
import {
  GiAbstract029,
  GiAbstract013,
  GiAbstract032,
  GiAbstract063,
  GiAbstract089,
} from 'react-icons/gi';
import { useState } from 'react';
import styles from './MenuLeftFooter.module.scss';

const MenuLeftFooter = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon((prevIcon) => (prevIcon === iconName ? null : iconName));
  };

  return (
    <nav className={styles.navStyles}>
      <div className={styles.menuFooter}>
        <div
          className={`${styles.menuIcon} ${styles.shadowMenu} ${styles.OneMenu}`}
        >
          <NavLink to={activeIcon === 'OneYes' ? '/' : '/MenuLeftOne'}>
            <GiAbstract029
              className={`${styles.icon} ${
                activeIcon === 'OneYes' ? styles.activeIcon : ''
              }`}
              onClick={() => handleIconClick('OneYes')}
              title="Animation"
            />
          </NavLink>
        </div>

        <div
          className={`${styles.menuIcon} ${styles.shadowMenu} ${styles.TwoMenu}`}
        >
          <NavLink to={activeIcon === 'TwoYes' ? '/' : '/MenuLeftTwo'}>
            <GiAbstract013
              className={`${styles.icon} ${
                activeIcon === 'TwoYes' ? styles.activeIcon : ''
              }`}
              onClick={() => handleIconClick('TwoYes')}
              title="Animation"
            />
          </NavLink>
        </div>

        <div
          className={`${styles.menuIcon} ${styles.shadowMenu} ${styles.FreeMenu}`}
        >
          <NavLink to={activeIcon === 'FreeYes' ? '/' : '/MenuLeftFree'}>
            <GiAbstract032
              className={`${styles.icon} ${
                activeIcon === 'FreeYes' ? styles.activeIcon : ''
              }`}
              onClick={() => handleIconClick('FreeYes')}
              title="Animation"
            />
          </NavLink>
        </div>

        <div
          className={`${styles.menuIcon} ${styles.shadowMenu} ${styles.FourMenu}`}
        >
          <NavLink to={activeIcon === 'FourYes' ? '/' : '/MenuLeftFour'}>
            <GiAbstract063
              className={`${styles.icon} ${
                activeIcon === 'FourYes' ? styles.activeIcon : ''
              }`}
              onClick={() => handleIconClick('FourYes')}
              title="Animation"
            />
          </NavLink>
        </div>

        <div
          className={`${styles.menuIcon} ${styles.shadowMenu} ${styles.FiveMenu}`}
        >
          <NavLink to={activeIcon === 'FiveYes' ? '/' : '/MenuLeftFive'}>
            <GiAbstract089
              className={`${styles.icon} ${
                activeIcon === 'FiveYes' ? styles.activeIcon : ''
              }`}
              onClick={() => handleIconClick('FiveYes')}
              title="Animation"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default MenuLeftFooter;
