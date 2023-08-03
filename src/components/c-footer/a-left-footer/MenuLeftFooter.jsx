import { NavLink } from 'react-router-dom';
import {
  GiAbstract029,
  GiAbstract013,
  GiAbstract032,
  GiAbstract063,
  GiAbstract089,
} from 'react-icons/gi';
import { useState } from 'react';
import styles from './MenuLeftFooter.module.css';

const MenuLeftFooter = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon((prevIcon) => (prevIcon === iconName ? null : iconName));
  };

  return (
    <div className={styles.end}>
      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <NavLink to={activeIcon === 'PlagueDoctor' ? '/' : '/PersonalPage'}>
          <GiAbstract029
            className={`${styles.icon} ${
              activeIcon === 'PlagueDoctor' ? styles.activeIcon : ''
            }`}
            onClick={() => handleIconClick('PlagueDoctor')}
            title="Animation"
          />
        </NavLink>
      </div>

      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <NavLink to={activeIcon === 'PlagueDoctor' ? '/' : '/PersonalPage'}>
          <GiAbstract089
            className={`${styles.icon} ${
              activeIcon === 'PlagueDoctor' ? styles.activeIcon : ''
            }`}
            onClick={() => handleIconClick('PlagueDoctor')}
            title="Animation"
          />
        </NavLink>
      </div>

      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <NavLink to={activeIcon === 'PlagueDoctor' ? '/' : '/PersonalPage'}>
          <GiAbstract063
            className={`${styles.icon} ${
              activeIcon === 'PlagueDoctor' ? styles.activeIcon : ''
            }`}
            onClick={() => handleIconClick('PlagueDoctor')}
            title="Animation"
          />
        </NavLink>
      </div>

      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <NavLink to={activeIcon === 'PlagueDoctor' ? '/' : '/PersonalPage'}>
          <GiAbstract032
            className={`${styles.icon} ${
              activeIcon === 'PlagueDoctor' ? styles.activeIcon : ''
            }`}
            onClick={() => handleIconClick('PlagueDoctor')}
            title="Animation"
          />
        </NavLink>
      </div>

      <div className={`${styles.menuIcon} ${styles.shadowMenu}`}>
        <NavLink to={activeIcon === 'PlagueDoctor' ? '/' : '/PersonalPage'}>
          <GiAbstract013
            className={`${styles.icon} ${
              activeIcon === 'PlagueDoctor' ? styles.activeIcon : ''
            }`}
            onClick={() => handleIconClick('PlagueDoctor')}
            title="Animation"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default MenuLeftFooter;
