import React, { useState } from 'react';
import { GiBookCover, GiPlagueDoctorProfile } from 'react-icons/gi';
import { FaReact } from 'react-icons/fa';
import { TfiGallery } from 'react-icons/tfi';
import { NavLink } from 'react-router-dom';
import styles from './MenuTopCenter.module.css';

const MenuTopCenter = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon((prevIcon) => (prevIcon === iconName ? null : iconName));
  };

  return (
    <div
      className={`${styles.menuCenter} ${styles.shadowMenu} ${styles.navStyles}`}
    >
      <nav className={styles.navStyles}>
        <div className={styles.navContent}>
          <div className={styles.navCont}>
            <NavLink to={activeIcon === 'PlagueDoctor' ? '/' : '/PersonalPage'}>
              <GiPlagueDoctorProfile
                className={`${styles.icon} ${
                  activeIcon === 'PlagueDoctor' ? styles.activeIcon : ''
                }`}
                onClick={() => handleIconClick('PlagueDoctor')}
                title="Animation"
              />
            </NavLink>
          </div>

          <div className={styles.navCont}>
            <NavLink to={activeIcon === 'ReactIcon' ? '/' : '/Web'}>
              <FaReact
                className={`${styles.icon} ${
                  activeIcon === 'ReactIcon' ? styles.activeIcon : ''
                }`}
                onClick={() => handleIconClick('ReactIcon')}
                title="Website portfolio"
              />
            </NavLink>
          </div>

          <div className={styles.navCont}>
            <NavLink to={activeIcon === 'GalleryIcon' ? '/' : '/Gallery'}>
              <TfiGallery
                className={`${styles.icon} ${
                  activeIcon === 'GalleryIcon' ? styles.activeIcon : ''
                }`}
                onClick={() => handleIconClick('GalleryIcon')}
                title="Gallery portfolio"
              />
            </NavLink>
          </div>

          <div className={styles.navCont}>
            <NavLink to={activeIcon === 'BookCover' ? '/' : '/News'}>
              <GiBookCover
                className={`${styles.icon} ${
                  activeIcon === 'BookCover' ? styles.activeIcon : ''
                }`}
                onClick={() => handleIconClick('BookCover')}
                title="Gallery portfolio"
              />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuTopCenter;
