import React from "react";
import intro from "../images/intro.svg";
import suit from "../images/suit.svg";
import bat from "../images/bat.png";
import house from "../images/house.svg";
import heart from "../images/heart.svg";
import "./timeline.css";
import allPosts from "./data";
import Post from "./post";

function Timeline({ name, timeLineData, id }) {
  const loginid = { id };
  var myOwnPosts = [];
  console.log(loginid);

  allPosts
    .filter((mypost) => mypost.name == name)
    .filter((e) => {
      myOwnPosts.push(
        <Post
          name={e.name}
          date={e.date}
          time={e.time}
          imgsrc={e.imgsrc}
          likeCount={e.likeCount}
          postedBy={e.postedBy}
          comment={e.comment}
          loginid={loginid}
        />
      );
    });

  return (
    <div className="time">
      <div>
        {" "}
        <br />
        <div className="intro">
          <img src={intro} style={{ height: 15, width: 15 }} />
          <span className="title">Introduction</span>
        </div>
        <div className="intro">
          <img src={suit} style={{ height: 15, width: 15 }} />
          <span className="title">
            Professional{" "}
            <span className="inlinetitle">
              <u>Cricketer</u>
            </span>
          </span>
        </div>
        <div className="intro">
          <img src={suit} style={{ height: 15, width: 15 }} />
          <span className="title">{timeLineData[1]}</span>
        </div>
        <div className="intro">
          <img src={suit} style={{ height: 15, width: 15 }} />
          <span className="title">{timeLineData[2]}</span>
        </div>
        <div className="intro">
          <img src={bat} style={{ height: 30, width: 17 }} />
          <span className="title">{timeLineData[3]}</span>
        </div>
        <div className="intro">
          <img src={bat} style={{ height: 30, width: 17 }} />
          <span className="title">{timeLineData[4]}</span>
        </div>
        <div className="intro">
          <img src={house} style={{ height: 30, width: 17 }} />
          <span className="title">{timeLineData[5]}</span>
        </div>
        <div className="intro">
          <img src={heart} style={{ height: 30, width: 17 }} />
          <span className="title">Married </span>
        </div>
      </div>
      <div className="sidetitle">{myOwnPosts}</div>
    </div>
  );
}

export default Timeline;

