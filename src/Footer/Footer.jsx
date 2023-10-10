import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:rajeev.kumar.phe21@itbhu.ac.in">
            rajeev.kumar.phe21@itbhu.ac.in
          </a>
        </li>
        <li className={styles.link}>
          <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/rajeev-kumar-693a68252/">
            https://www.linkedin.com/in/rajeev-kumar-693a68252/
          </a>
        </li>
        <li className={styles.link}>
          <i class="fa-brands fa-github"></i>
          <a href="https://github.com/Tonystark121">
            https://github.com/Tonystark121
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
