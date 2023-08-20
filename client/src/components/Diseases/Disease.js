import React from "react";
import { Link } from "react-router-dom";
import styles from "./disease.module.css";

export default function Disease({ disease }) {
  return (
    <Link to={`/disease/${disease._id}`} style={{ textDecoration: "none" }}>
      <div className={styles["box"]}>
        <div className={styles["image"]}>
          <img src={disease.url} alt="" />
        </div>
        <div className={styles["content"]}>
          <div className={styles["icon"]}></div>
          <h3>{disease.name}</h3>
          <a href="#" className={styles["btn"]}>
            learn more <span className="fas fa-chevron-right"></span>{" "}
          </a>
        </div>
      </div>
    </Link>
  );
}
