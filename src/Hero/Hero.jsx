import React from "react";
import image from "../assets/cart1.png";
import styles from "./Hero.module.css";
import Button from '../UI/Button'

const Hero = () => {
  return (
    <section className={styles.main}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hi, I'm Rajeev Kumar</h1>
        <p className={styles.descrip}>
          I'm a full-stack developer with 5 year of experience in React JS and
          Node JS. Reach out to me if want to know more about my works.
        </p>
        <Button className={styles.btn}>Contact Me</Button>
      </div>
      <img src={image} alt="logo" className={styles.img} />
      <div className={styles.topBlur} />
      <div className={styles.btmBlur} />
    </section>
  );
};

export default Hero;
