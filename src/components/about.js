import React from "react";

import "./about.css";
function About({ aboutData }) {
  return (
    <div className="aboutdiv">
      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>Name:&nbsp;</span>
        <span>{aboutData[0]}</span>
        <br />
      </div>

      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>Friends:&nbsp;</span>
        <span>{aboutData[1]}</span>
        <br />
      </div>

      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>Sex:&nbsp;</span>
        <span>{aboutData[2]}</span>
        <br />
      </div>

      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>Birthday:&nbsp;</span>
        <span>{aboutData[3]}</span>
        <br />
      </div>

      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>Relationship Status:&nbsp;</span>
        <span>{aboutData[4]}</span>
        <br />
      </div>

      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>School:&nbsp;</span>
        <span>{aboutData[5]}</span>
        <br />
      </div>

      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>Email:&nbsp;</span>
        <span>{aboutData[6]}</span>
        <br />
      </div>

      <div className="aboutelement">
        <span style={{ fontWeight: "bold" }}>Phone no:&nbsp;</span>
        <span>{aboutData[7]}</span>
      </div>
    </div>
  );
}

export default About;
