import React from "react";
import styles from "./About.module.css";
import image from "../assets/cart2.png";
import img1 from '../assets/image 4.png'
import img2 from '../assets/image 2.png'
import img3 from '../assets/image 3.png'

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <img src={image} alt="logo" className={styles.img}  />
        <ul className={styles.items}>
          <li className={styles.item}>
            <img src={img2} alt="icon" />
            <div className={styles.item_text}>
              <h3>Frontend developer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={img3} alt="icon" />
            <div className={styles.item_text}>
              <h3>Backend developer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={img1} alt="icon" />
            <div className={styles.item_text}>
              <h3>UI & UX developer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
