import styles from './Card.module.css';

const Card = () => {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.shell}>
          <div className={styles.nameTextContent}>Имя владельца</div>
          <div className={styles.contentCenter}>
            <div className={styles.contentLeft}>
              <div className={styles.leftOne}></div>
              <div className={styles.leftTwo}></div>
              <div className={styles.leftFree}></div>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.rightOne}></div>
              <div className={styles.rightTwo}></div>
              <div className={styles.rightFree}></div>
              <div className={styles.rightFour}></div>
              <div className={styles.rightFive}></div>
              <div className={styles.rightSix}></div>
              <div className={styles.rightSeven}></div>
              <div className={styles.rightEight}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
