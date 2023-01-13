import React, { useState, useEffect } from "react";
import intro from "../images/intro.svg";
import suit from "../images/suit.svg";
import bat from "../images/bat.png";
import house from "../images/house.svg";
import heart from "../images/heart.svg";
import "./timeline.css";
import ReactLoading from "react-loading";
import allPosts from "./data";
import Post from "./post";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Timeline({ name, timeLineData, loginId }) {
  const [posts, setPosts] = useState([]);
  const loginid = loginId;
  var myOwnPosts = [];

  const usersCollectionRef = collection(db, "all Posts");
  const [editInfo, setEdit] = useState(true);

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
    <>

      <div className="time1">
        <div className="time2">

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

        <button className="profile21" onClick={()=>{setEdit(true)}}>Edit User Info</button>
        </div>

        <div className="sidetitle">{myOwnPosts}</div>


{editInfo ?
        <div className="time3">
          <div className="time4">
            EDIT INFORMATION
          </div>
          <div>
            <div className="time5">
              <span>Career</span>
              <span className="time10">Studied at</span>
            </div>
            <div className="time6">
              <span className="time8"><input type="text" className="time7" value="Professional Cricketer" /></span>
              <span className="time9"><input type="text" className="time7" value="Vivekanand International School" /></span>
            </div>
          </div>


          <div>
            <div className="time5">
              <span>High Score 1</span>
              <span className="time11">High Score 2</span>
            </div>
            <div className="time6">
              <span className="time8"><input type="text" className="time7" value="264(173) vs SriLanks on Nov 13, 2014" /></span>
              <span className="time9"><input type="text" className="time7" value="209(158) vs Australia on Nov 2, 2013" /></span>
            </div>
          </div>


          <div>
            <div className="time5">
              <span>Founder at</span>
              <span className="time12">From</span>
            </div>
            <div className="time6">
              <span className="time8"><input type="text" className="time7" value="SEVEN Pvt. Ltd" /></span>
              <span className="time9"><input type="text" className="time7" value="Mumbai, India" /></span>
            </div>
          </div>

        <div>
          <button onClick={()=>{setEdit(false)}}>Close</button>
        </div>

        </div>
    :""}
      </div>

     




    </>
  );
}

export default Timeline;
