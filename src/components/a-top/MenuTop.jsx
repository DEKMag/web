import MenuTopLeft from './a-left-top/MenuTopLeft';
import MenuTopCenter from './b-center-top/MenuTopCenter';
import MenuTopRight from './c-right-top/MenuTopRight';
import styles from './MenuTop.module.scss';

const MenuTop = () => {
  return (
    <nav className={styles.navTop}>
      <>
        <MenuTopLeft />
        <MenuTopCenter />
        <MenuTopRight />
      </>
    </nav>
  );
};

export default MenuTop;
