import './MenuFooter.module.css';
import styles from './MenuFooter.module.css';
import MenuLeftFooter from './a-left-footer/MenuLeftFooter';
import MenuRightFooter from './c-right-footer/MenuRightFooter';

const MenuFooter = () => {
  return (
    <nav className={styles.navFooter}>
      <MenuLeftFooter />

      <MenuRightFooter />
    </nav>
  );
};

export default MenuFooter;
