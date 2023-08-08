import { useState } from 'react';
import RangeSlider from './details/Range';
import styles from './MenuLeftOne.module.scss';

const MenuLeftOne = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  // Если isOpen === false, компонент не будет отрисовываться
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.shell}>
          <div className={styles.nameTextContent}>1</div>
          <div className={styles.contentCenter}>
            <div className={styles.inputRange}>
              <RangeSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLeftOne;
