import React from "react";
import viratImage1 from "../images/v1.webp";
import viratImage2 from "../images/v2.jfif";
import viratImage3 from "../images/v3.webp";
import viratImage4 from "../images/v4.avif";
import viratImage5 from "../images/v5.jpg";
import viratImage6 from "../images/v6.avif";
import viratImage7 from "../images/v7.webp";
import viratImage8 from "../images/v8.jpg";
import viratImage9 from "../images/v9.avif";
import viratImage10 from "../images/v10.webp";
import "./photos.css";

function Photos() {
  return (
    <div className="imagecol">
      <div className="imagerow">
        <img src={viratImage1} className="imgclass" />
        <img src={viratImage6} className="imgclass" />
        <img src={viratImage3} className="imgclass" />
      </div>
      <br />
      <div className="imagerow">
        <img src={viratImage4} className="imgclass" />
        <img src={viratImage2} className="imgclass" />
        <img src={viratImage5} className="imgclass" />
      </div>
      <br />
      <div className="imagerow">
        <img src={viratImage7} className="imgclass" />
        <img src={viratImage8} className="imgclass" />
        <img src={viratImage9} className="imgclass" />
      </div>
      <br />
      <div className="imagerow">
        <img src={viratImage10} className="imgclass" />
      </div>
      <br />
    </div>
  );
}

export default Photos;
