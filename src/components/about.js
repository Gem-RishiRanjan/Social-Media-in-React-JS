import React from "react";

import "./about.css";
function About({ aboutData }) {
  console.log(aboutData);
  const aboutArr = [];
  const aboutInfo = () => {
    aboutData.map((data) => {
      return (
        <div className="aboutelement">red
          <span className="about1">Name:&nbsp;</span>
          <span>{data}</span>
          <br />
        </div>
      );
    });
  };

  return <div className="aboutdiv">{aboutInfo}</div>;
}

export default About;
