import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link to="/" className={styles.footerContent}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
