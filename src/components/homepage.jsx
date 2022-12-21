
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./homepage.css";

import Homepageheader from "./homepageheader";
import news from "./news.svg";
import messenger from "./fbmessenger.svg";
import tv from "./tv.svg";
import shop from "./shop.svg";
import cal from "./calendar.svg";
import flag from "./flag.svg";
import group from "./group.svg";
import drop from "./caret.svg";
import Modal from "./modal";
import Post from "./post";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Homepage() {
  const navigate = useNavigate();
  const { loginid } = useParams();
  const usersCollectionRef = collection(db, "all Posts");
  const [comm, setComm] = useState([
    { Name: "MS Dhoni", comment: "Beautiful picture" },
    { Name: "Sachin RT", comment: "Scary one!!" },
    { Name: "Yuzi Chahal", comment: "Its dangerous" },
  ]);
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

  useEffect(() => {
    const getPosts = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getPosts();
  }, []);

  return (
    <div className="home">
      <div style={{ position: "fixed" }}>
        <Homepageheader loginid={loginid} />
      </div>
      <br />
      <br />
      <div className="sides">
        <div className="leftbody">
          <div className="home1">
            <img className="home2" src={news} />

            <span style={{ verticalAlign: "middle", marginTop: "10px" }}>
              &nbsp;Newsfeed&nbsp;&nbsp;&nbsp;...
            </span>
          </div>

          <div className="home1">
            <img className="home2" src={messenger} />

            <span style={{ verticalAlign: "middle", marginTop: "10px" }}>
              &nbsp;Messenger
            </span>
          </div>

          <div className="home1">
            <img className="home2" src={tv} />

            <span style={{ verticalAlign: "middle", marginTop: "10px" }}>
              &nbsp;Watch
            </span>
          </div>

          <div className="home1">
            <img className="home2" src={cal} />

            <span style={{ verticalAlign: "middle", marginTop: "10px" }}>
              &nbsp;Marketplace
            </span>
          </div>

          <div className="home1">
            <u>Explore</u>
          </div>

          <div className="home1">
            <img className="home2" src={shop} />

            <span style={{ verticalAlign: "middle", marginTop: "10px" }}>
              &nbsp;Events
            </span>
          </div>

          <div className="home1">
            <img className="home2" src={flag} />

            <span style={{ verticalAlign: "middle", marginTop: "10px" }}>
              &nbsp;Pages
            </span>
          </div>

          <div className="home1">
            <img className="home2" src={group} />

            <span style={{ verticalAlign: "middle", marginTop: "10px" }}>
              &nbsp;Groups
            </span>
          </div>

          <div className="home1">
            <img className="home2" src={drop} />

            <span className="home3">&nbsp;See more...</span>
          </div>

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
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
      {modal && <Modal showModal={showModal} comm={comm} />}
    </div>
  );
}

export default Homepage;

