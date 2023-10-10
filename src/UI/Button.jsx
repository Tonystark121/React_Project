import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      type={`${props.type} : button`}
      onClick={props.onClick}
    >
      <a href="mailto:rajeev.kumar.phe21@itbhu.ac.in">{props.children}</a>
    </button>
  );
};

export default Button;
