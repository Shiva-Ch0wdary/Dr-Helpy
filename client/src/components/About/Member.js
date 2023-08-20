import React from "react";

export default function Member({ member, aboutStyles }) {
  return (
    <div className={aboutStyles["box"]}>
      <h3>{member.h3}</h3>
      <p>{member.p}</p>
    </div>
  );
}
