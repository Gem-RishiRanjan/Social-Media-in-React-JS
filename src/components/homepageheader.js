import React, { useState, useEffect } from "react";
import fb from "./face.png";
import "./homepageheader.css";
import search from "./search.webp";
import request from "./request.png";
import messenger from "./messenger.png";
import bell from "./bell.png";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Homepageheader({ loginid }) {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  var abcd = 0;

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
      abcd = filPer;
    });

  return (
    <div className="mainheader">
      <img
        src={fb}
        style={{ maxHeight: "25px", marginTop: "8px", marginLeft: "20px" }}
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
        onClick={() => navigate(`/profile/${abcd.loginId}`)}
      >
        {abcd.name}
      </button>
      <button
        className="header4"
        onClick={() => navigate(`/homepage/${abcd.loginId}`)}
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
