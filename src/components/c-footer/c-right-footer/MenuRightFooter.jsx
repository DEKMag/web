import {
  GiAbstract053,
  GiAbstract050,
  GiAbstract098,
  GiAbstract078,
  GiAce,
} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './MenuRightFooter.module.scss';

const MenuRightFooter = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon((prevIcon) => (prevIcon === iconName ? null : iconName));
  };

  return (
    <nav className={styles.navStyles}>
      <div className={styles.menuFooter}>
        <div
          className={`${styles.menuIcon} ${styles.shadowMenu} ${styles.OneMenu}vv`}
        >
          <NavLink to={activeIcon === 'OneYes' ? '/' : '/MenuRightOne'}>
            <GiAbstract053
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
          <NavLink to={activeIcon === 'TwoYes' ? '/' : '/MenuRightTwo'}>
            <GiAbstract050
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
          <NavLink to={activeIcon === 'FreeYes' ? '/' : '/MenuRightFree'}>
            <GiAbstract098
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
          <NavLink to={activeIcon === 'FourYes' ? '/' : '/MenuRightFour'}>
            <GiAbstract078
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
          <NavLink to={activeIcon === 'FiveYes' ? '/' : '/MenuRightFive'}>
            <GiAce
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

export default MenuRightFooter;
