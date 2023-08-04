import styles from './MenuLeftFree.module.css';
import { useState } from 'react';

const MenuLeftFree = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Если isOpen === false, компонент не будет отрисовываться
  }
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.shell}>
          <div className={styles.nameTextContent}>1</div>
          <div className={styles.contentCenter}>
            <div className={styles.closeIcon} onClick={handleClose}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLeftFree;
