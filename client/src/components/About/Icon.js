import React from "react";

export default function Icon({ member, aboutStyles }) {
  return (
    <div className={aboutStyles["icons"]}>
      <i className={`fas ${member.class}`}></i>
      <h3>{member.h3}</h3>
      <p>{member.p}</p>
    </div>
  );
}
