import React from "react";

import resumeSvg from "../../assets/undraw_resume_re_hkth.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          ¡Un <span>curriculum</span> que destaca!
        </p>
        <p className={styles.heading}>
          Crea tu propio currículum. <span>Es gratis</span>.
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
