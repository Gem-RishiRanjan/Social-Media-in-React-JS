import React, { useState, useEffect } from "react";
import fb from "../images/face.png";
import "./homepageheader.css";
import search from "../images/search.webp";
import request from "../images/request.png";
import messenger from "../images/messenger.png";
import bell from "../images/bell.png"
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Homepageheader({ loginid }) {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  var loggedInPerson = 0;

  const usersCollectionRef = collection(db, "allUsers");

  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);

  allUsers
    .filter((people) => people.loginId == loginid)
    .map((filPer) => {
      loggedInPerson = filPer;
    });

  return (
    <div className="mainheader">
      <img className="header6"
        src={fb}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input className="header1" type="text" placeholder="Search" />
      <img className="header2" src={search} />
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        className="header3"
        onClick={() => navigate(`/profile/${loggedInPerson.loginId}`)}
      >
        {loggedInPerson.name}
      </button>
      <button
        className="header4"
        onClick={() => navigate(`/homepage/${loggedInPerson.loginId}`)}
      >
        Home
      </button>
      <button className="header4">Find Friends</button>
      <img className="header5" src={request} />
      <img className="header5" src={messenger} />
      <img className="header5" src={bell} />
      <button
        className="header4"
        onClick={() => {
          navigate("/mainpage");
          localStorage.setItem("islogin", 0);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Homepageheader;

