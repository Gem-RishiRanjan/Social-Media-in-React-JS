import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./homepage.css";

import Homepageheader from "./homepageheader";
import news from "../images/news.svg";
import messenger from "../images/fbmessenger.svg";
import tv from "../images/tv.svg";
import shop from "../images/shop.svg";
import cal from "../images/calendar.svg";
import flag from "../images/flag.svg";
import group from "../images/group.svg";
import drop from "../images/caret.svg";
import Post from "./post";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Homepage() {
  const navigate = useNavigate();
  const { loginid } = useParams();
  const usersCollectionRef = collection(db, "all Posts");

  const [modal, showModal] = useState(false);

  const [posts, setPosts] = useState([]);

  const logg = localStorage.getItem("islogin");
  useEffect(() => {
    if (logg == 0) {
      console.log(logg);
      navigate("/mainpage");
    } else {
    }
  });

  const leftBodyData = [
    { image: news, text: "NewsFeed" },
    { image: messenger, text: "Messenger" },
    { image: tv, text: "Watch" },
    { image: shop, text: "Marketplace" },
    { image: cal, text: "Events" },
    { image: flag, text: "Pages" },
    { image: group, text: "Groups" },
    { image: drop, text: "See more..." },
  ];

  useEffect(() => {
    const getPosts = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getPosts();
  }, []);

  const leftsidedata = [];
  const leftData = () => {
    leftBodyData.map((data) => {
      return leftsidedata.push(
        <div className="home1">
          <img className="home2" src={data.image} />

          <span className="home4">&nbsp;{data.text}&nbsp;&nbsp;&nbsp;...</span>
        </div>
      );
    });
  };
  leftData();
  return (
    <div className="home">
      <div style={{ position: "fixed" }}>
        <Homepageheader loginid={loginid} />
      </div>
      <br />
      <br />
      <div className="sides">
        <div className="leftbody">
          {leftsidedata}

          <div className="home1">
            <span className="home3">Ad . Group . Page</span>
            <br />
            <span className="home3">Event . Fundraiser</span>
          </div>
        </div>

        <div className="body">
          {posts.map((e, index) => {
            return (
              <div key={index}>
                <Post 
                // data = {e}
                
                  name={e.name}
                  date={e.date}
                  time={e.time}
                  imgsrc={e.imgsrc}
                  likeCount={e.likeCount}
                  postedBy={e.postedBy}
                  loginid={loginid}
                  comid={e.id}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
      
    </div>
  );
}

export default Homepage;
