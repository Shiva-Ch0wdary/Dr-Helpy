import React from "react";
import landingStyles from "./landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div id={landingStyles.landing}>
      <header id={landingStyles.header}>
        <img src="./images/healthcare.png" alt="" />
        <span>Dr. Helpy</span>
      </header>
      <div id={landingStyles.cont}>
        <div id={landingStyles.description}>
          <div>
            <h1>
              Stay <span>Safe</span>, Stay <span>Healthy</span>
            </h1>
            <h2>Caring For Your Life</h2>

            <div id={landingStyles.wrapper}>
              <p id={landingStyles["static-text"]}>We provide </p>
              <ul id={landingStyles["dynamic-text"]}>
                <li>Medicines</li>
                <li>Best Doctors</li>
                <li>Suggestions</li>
              </ul>
            </div>
            <br />

            <Link to="./signup" id={landingStyles.service}>
              Get our services
            </Link>
          </div>
        </div>
        <div id={landingStyles.imgholder}>
          <img src="./images/undraw_medicine_b1ol.png" alt="" />
        </div>
      </div>
    </div>
  );
}
