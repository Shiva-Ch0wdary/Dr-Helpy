import React from "react";

export default function Service({ service, aboutStyles }) {
  return (
    <div className={aboutStyles["box"]}>
      <i className={`fas ${service.class}`}></i>
      <h3>{service.h3}</h3>
      <p>{service.p}</p>
    </div>
  );
}
