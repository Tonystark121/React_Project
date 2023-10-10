import React from "react";
import styles from "./Project.module.css";
import project from "../data/project.json";

const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h3 className={styles.title}>Projects</h3>
      <div className={styles.content}>
        <div className={styles.items}>
          {project.map((ele, id) => (
            <div className={styles.items_content}>
              <img src={ele.image} alt="logo" />
              <div className={styles.item}>
                <h3>{ele.title}</h3>
                <p>{ele.descrip}</p>
                <div className={styles.tech}>
                  {ele.techStack.map((item, id) => (
                    <span key={id}>{item}</span>
                  ))}
                </div>
                <div className={styles.btn}>
                  {ele.btn.map((btn, idx) => (
                    <button key={idx}><a href="#">{btn}</a></button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
