import React from "react";
import skills from "../data/skills.json";
import experience from "../data/experience.json";
import { getImageUrl } from "../utils";
import logo from './image 7.png'
import styles from './Experience.module.css'

const Experience = () => {

  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skill}>
          {skills.map((ele,id) => (
            <div key={id} className={styles.skill_items}> 
              <div className={styles.image}>
                  <img src={logo} alt={`${skills.title}`} />
              </div>
              <p>{ele.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.items}>
          {experience.map((ele, id) => {
            return (
              <li key={id} className={styles.item}>
                <img src={ele.image} alt={`${ele.title} logo`} />
                <div className={styles.item_content}>
                  <h3>{`${ele.role} ${ele.Organization}`}</h3>
                  <p>{`${ele.StartData} - ${ele.EndDate}`}</p>
                  <ul>
                    {ele.items.map((item, idx) => {
                      return <li key={idx}>{item}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
