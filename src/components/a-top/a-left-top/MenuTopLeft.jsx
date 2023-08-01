// import Calendar from "./Calendare";
// import { SiBuymeacoffee } from "react-icons/si";
// import { NavLink } from "react-router-dom";
// import styles from "./MenuTopLeft.module.css";

// const MenuTopLeft = () => {
//   return (
//     <div className={styles.left}>
//       <div className={`${styles.menu} ${styles.shadowMenu}`}>
//         <NavLink
//           style={({ isActive }) =>
//             isActive ? { color: "#E0AF68" } : { color: "antiquewhite" }
//           }
//           to="/"
//         >
//           <SiBuymeacoffee className={styles.icon} />
//         </NavLink>
//       </div>
//       <div className={`${styles.date} ${styles.shadowMenu}`}>
//         <Calendar />
//       </div>
//     </div>
//   );
// };

// export default MenuTopLeft;
import React, { useState } from "react";
import Calendar from "./Calendare";
import { TfiLinux } from "react-icons/tfi";
import { Link } from "react-router-dom";
import styles from "./MenuTopLeft.module.css";

const MenuTopLeft = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIconClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={styles.left}>
      <div className={`${styles.menu} ${styles.shadowMenu}`}>
        <Link
          to="/"
          onClick={handleIconClick}
          style={isActive ? { color: "#E0AF68" } : { color: "antiquewhite" }}
        >
          <TfiLinux className={styles.icon} />
        </Link>
      </div>
      <div className={`${styles.date} ${styles.shadowMenu}`}>
        <Calendar />
      </div>
    </div>
  );
};

export default MenuTopLeft;
