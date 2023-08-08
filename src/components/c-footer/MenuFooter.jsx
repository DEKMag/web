import MenuLeftFooter from './a-left-footer/MenuLeftFooter';
import MenuRightFooter from './c-right-footer/MenuRightFooter';
import styles from './MenuFooter.module.scss';

const MenuFooter = () => {
  return (
    <nav className={styles.navFooter}>
      <>
        <MenuLeftFooter />
        <MenuRightFooter />
      </>
    </nav>
  );
};

export default MenuFooter;
