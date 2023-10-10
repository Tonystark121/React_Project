import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [check,isCheck] = useState(false);
    
    const toggleBtn = () => {
      isCheck(!check);
    }

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.title}>
        PortFolio
      </a>
      <div className={styles.menu}>
        <i
          className={`${styles.menu_btn} fa-solid ${check ? 'fa-xmark' : 'fa-bars'}`}
          id="checkbox"
          onClick={toggleBtn}
        ></i>
        <ul className={`${styles.menu_item} ${check && styles.menuOpen}`}>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

