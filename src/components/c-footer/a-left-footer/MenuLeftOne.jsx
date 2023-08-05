import { useState } from 'react';
import { GiAbstract029 } from 'react-icons/gi';
import styles from './MenuLeftOne.module.css';

const MenuLeftOne = ({ activeIcon }) => {
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
            {/* <div className={styles.closeIcon} onClick={handleClose}>
              <GiAbstract029 />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLeftOne;
