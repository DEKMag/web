import { useState, useEffect, useRef, useCallback } from 'react';
import Clock from './Clock';
import MenuItem from './burgermenu/MenuItem';
import { GiHamburger } from 'react-icons/gi';
import styles from './MenuTopRight.module.css';

const MenuTopRight = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = useCallback(
    (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsActive(false);
      }
    },
    [menuRef]
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handleToggleMenu = () => {
    setIsActive(!isActive);
    toggleMenu();
  };

  return (
    <div className={styles.left}>
      <div className={`${styles.date} ${styles.shadowMenu}`}>
        <Clock />
      </div>
      <div className={`${styles.menu} ${styles.shadowMenu}`} ref={menuRef}>
        <div
          className={styles.toggle}
          style={isActive ? { color: '#E0AF68' } : { color: 'antiquewhite' }}
          onClick={handleToggleMenu}
        >
          <GiHamburger className={styles.icon} />
        </div>
        {isOpen && (
          <div className={`${styles.menuItems} ${styles.menuItemsOpen}`}>
            <MenuItem label="One" />
            <MenuItem label="Two" />
            <MenuItem label="Three" />
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
