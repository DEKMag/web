import "./MenuTopCenter.module.css";

import { GiBookCover, GiPlagueDoctorProfile } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuTopCenter.module.css";

const MenuTopCenter = () => {
  const [isActiveHome, setIsActiveHome] = useState(false);
  const handleHomeClick = () => {
    setIsActiveHome((prevState) => !prevState);
  };

  const [isActiveWeb, setIsActiveWeb] = useState(false);
  const handleWebClick = () => {
    setIsActiveWeb((prevState) => !prevState);
  };

  const [isActiveGallery, setIsActiveGallery] = useState(false);
  const handleGalleryClick = () => {
    setIsActiveGallery((prevState) => !prevState);
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  // useEffect(() => {
  //   return () => {
  //     // This function will be called when the component unmounts
  //     // Reset the isActiveHome state to false when the component is unmounted
  //     setIsActiveHome(false);
  //     // setIsActiveWeb(false);
  //     // setIsActiveGallery(false);
  //     // setIsActive(false);
  //   };
  // }, []);

  return (
    <div
      className={`${styles.menuCenter} ${styles.shadowMenu} ${styles.navStyles}`}
    >
      <nav className={styles.navStyles}>
        <div className={styles.navContent}>
          <div className={styles.navCont}>
            <NavLink
              style={
                isActiveHome ? { color: "#E0AF68" } : { color: "antiquewhite" }
              }
              to={isActiveHome ? "/" : "/PersonalPage"}
              onClick={handleHomeClick}
              // end
            >
              <GiPlagueDoctorProfile className={styles.icon} />
            </NavLink>
          </div>

          <div className={styles.navCont}>
            <NavLink
              style={
                isActiveWeb ? { color: "#E0AF68" } : { color: "antiquewhite" }
              }
              to={isActiveWeb ? "/" : "/Web"}
              onClick={handleWebClick}
            >
              <FaReact className={styles.icon} />
            </NavLink>
          </div>

          <div className={styles.navCont}>
            <NavLink
              style={
                isActiveGallery
                  ? { color: "#E0AF68" }
                  : { color: "antiquewhite" }
              }
              to={isActiveGallery ? "/" : "/Gallery"}
              onClick={handleGalleryClick}
            >
              <TfiGallery className={styles.icon} />
            </NavLink>
          </div>

          <div className={styles.navCont}>
            <NavLink
              style={
                isActive ? { color: "#E0AF68" } : { color: "antiquewhite" }
              }
              to={isActive ? "/" : "/News"}
              onClick={handleClick}
            >
              <GiBookCover className={styles.icon} />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuTopCenter;
