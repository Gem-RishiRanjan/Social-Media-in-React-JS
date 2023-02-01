import React, { useState, useEffect, useRef } from "react";
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
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Timeline({ name, timeLineData, loginId }) {
  const [posts, setPosts] = useState([]);
  const loginid = loginId;
  var myOwnPosts = [];
  console.log(loginid);
  const userId = localStorage.getItem("userLoggedIn");
  console.log(userId);
  const usersCollectionRef = query(collection(db, "all Posts"),orderBy("timestamp", "desc"));
  const [editInfo, setEdit] = useState(false);
  const [career, setCareer] = useState("Professional Cricketer");
  const [school, setSchool] = useState("Vivekanand International School");
  const [score1, setScore1] = useState("264(173) vs SriLanks on Nov 13, 201");
  const [score2, setScore2] = useState("209(158) vs Australia on Nov 2, 201");
  const [founder, setFounder] = useState("SEVEN Pvt. Ltd");
  const [from, setFrom] = useState("Mumbai, India");

  const careerRef = useRef(null);
  const schoolRef = useRef(null);
  const score1Ref = useRef(null);
  const score2Ref = useRef(null);
  const founderRef = useRef(null);
  const fromRef = useRef(null);

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

    const saveChanges=()=>{
      setCareer(careerRef.current.value);
      setSchool(schoolRef.current.value);
      setScore1(score1Ref.current.value);
      setScore2(score2Ref.current.value);
      setFounder(founderRef.current.value);
      setFrom(fromRef.current.value);
    }

  return (
    <>

      <div className="time1">
        <div className="time2">

        <div className="intro">
          <img src={intro} className="time14" />
          <span className="title">Introduction</span>
        </div>

        <div className="intro">
          <img src={suit} style={{ height: 15, width: 15 }} />
          <span className="title">
            {career}
          </span>
        </div>

        <div className="intro">
          <img src={suit} style={{ height: 15, width: 15 }} />
          <span className="title">Studied at {school}</span>
        </div>

        <div className="intro">
          <img src={suit} style={{ height: 15, width: 15 }} />
          <span className="title">Founder at {founder}</span>
        </div>

        <div className="intro">
          <img src={bat} style={{ height: 30, width: 17 }} />
          <span className="title">{score1}</span>
        </div>

        <div className="intro">
          <img src={bat} style={{ height: 30, width: 17 }} />
          <span className="title">{score2}</span>
        </div>

        <div className="intro">
          <img src={house} style={{ height: 30, width: 17 }} />
          <span className="title">{from}</span>
        </div>

        <div className="intro">
          <img src={heart} style={{ height: 30, width: 17 }} />
          <span className="title">Married </span>
        </div>

        {
          userId == loginId ?
          <button className="profile21" onClick={()=>{setEdit(true)}}>Edit User Info</button>
          :""
        } 
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
              <span className="time8"><input type="text" className="time7"   value ={career} ref = {careerRef} onChange = {(event) =>{setCareer(event.target.value)}} /></span>
              <span className="time9"><input type="text" className="time7" value={school} ref = {schoolRef} onChange = {(event) =>{setSchool(event.target.value)}} /></span>
            </div>
          </div>


          <div>
            <div className="time5">
              <span>High Score 1</span>
              <span className="time11">High Score 2</span>
            </div>
            <div className="time6">
              <span className="time8"><input type="text" className="time7"  value = {score1}  ref = {score1Ref} onChange = {(event) =>{setScore1(event.target.value)}} /></span>
              <span className="time9"><input type="text" className="time7" value={score2} ref = {score2Ref}  onChange = {(event) =>{setScore2(event.target.value)}} /></span>
            </div>
          </div>


          <div>
            <div className="time5">
              <span>Founder at</span>
              <span className="time12">From</span>
            </div>
            <div className="time6">
              <span className="time8"><input type="text" className="time7" value={founder} ref = {founderRef}  onChange = {(event) =>{setFounder(event.target.value)}}/></span>
              <span className="time9"><input type="text" className="time7" value={from} ref = {fromRef} onChange = {(event) =>{setFrom(event.target.value)}} /></span>
            </div>
          </div>

        <div>
        
          <button  className="time13" onClick={()=>{setEdit(false)}}>Close</button>
          <button  className="time13" onClick={()=>{saveChanges(); setEdit(false); }}>Save</button>
        </div>

        </div>
    :""}
      </div>

     




    </>
  );
}

export default Timeline;
