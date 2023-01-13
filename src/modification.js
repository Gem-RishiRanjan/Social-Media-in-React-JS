import React, { useState, useEffect } from "react";
import intro from "../images/intro.svg";
import suit from "../images/suit.svg";
import bat from "../images/bat.png";
import house from "../images/house.svg";
import heart from "../images/heart.svg";
import "./timeline.css";
import allPosts from "./data";
import Post from "./post";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Timeline({ name, timeLineData, loginId }) {
  const [posts, setPosts] = useState([]);
  const loginid = loginId;
  var myOwnPosts = [];
  console.log(loginid);
  const usersCollectionRef = collection(db, "all Posts");

  useEffect(() => {
    const getPosts = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getPosts();
  }, []);

  posts
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
          // comment={e.comment}

          loginid={loginid}
          comid={e.id}
        />
      );
    });

  return (
    <div className="time">
    
      <div className="time2">
        
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
          <span className="title">Studied at Vivekanand International School</span>
        </div>

        <div className="intro">
          <img src={suit} style={{ height: 15, width: 15 }} />
          <span className="title">Founder at POKKT Pvt Ltd</span>
        </div>

        <div className="intro">
          <img src={bat} style={{ height: 30, width: 17 }} />
          <span className="title">264(173) vs SriLanks on Nov 13, 2014</span>
        </div>

        <div className="intro">
          <img src={bat} style={{ height: 30, width: 17 }} />
          <span className="title">209(158) vs Australia on Nov 2, 2013</span>
        </div>

        <div className="intro">
          <img src={house} style={{ height: 30, width: 17 }} />
          <span className="title">From Mumbai</span>
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
