import React from "react";
import { Link } from "react-router-dom";

export default function Doctor({ doctor, doctorStyle }) {
  return (
    <div className={doctorStyle["card"]}>
      <div className={doctorStyle["card-image"]}>
        <img src={doctor.url} alt="Profile image" />
      </div>
      <p className={doctorStyle["name"]}>{doctor.name}</p>
      <p>{doctor.type}</p>
      <p style={{ textTransform: "none" }}>
        {" "}
        Ph.No: {doctor.phno}
        <br />
        Email: {doctor.email}
        <br />
        {doctor.workarea}
        <br />
      </p>
      <div className={doctorStyle["socials"]}>
        <a
          href={doctor.facebook}
          target="_blank"
          className={doctorStyle["facebook"]}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href={doctor.instagram}
          target="_blank"
          className={doctorStyle["instagram"]}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href={doctor.twitter}
          target="_blank"
          className={doctorStyle["twitter"]}
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
