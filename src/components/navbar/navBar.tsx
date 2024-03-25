import React from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.brandNameContainer}>
          NewNet
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
