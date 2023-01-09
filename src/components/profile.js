import React, { useState, useEffect } from "react";
import "./profile.css";
import Timeline from "./timeline";
import About from "./about";
import Friends from "./friends";
import Homepageheader from "./homepageheader";
import Photos from "./photos";
import { useLocation, useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Profile() {
  const [section, setSection] = useState("1");
  const [allUsers, setAllUsers] = useState([]);
  const usersCollectionRef = collection(db, "allUsers");

  const { id } = useParams();

  var currentUser = 0;
  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);

  allUsers
    .filter((people) => people.loginId == id)
    .map((filPer) => {
      currentUser = filPer;
    });

  return (
    <div>
      <Homepageheader loginid={id} />

      <div className="profile">
        <div className="image">
          <img
            src={currentUser.coverpic}
            style={{ height: "100%", width: "100%" }}
          />
          <img className="profile1" src={currentUser.dp} />
          <span className="profile2">{currentUser.name}</span>
          <br />
        </div>
        <div className="about">
          <button className="timeline" onClick={() => setSection("1")}>
            Timeline
          </button>
          <button className="timeline" onClick={() => setSection("2")}>
            {" "}
            About{" "}
          </button>
          <button className="timeline" onClick={() => setSection("3")}>
            Friends
          </button>
          <button className="timeline" onClick={() => setSection("4")}>
            Photos
          </button>
          <button className="timeline">More</button>
        </div>
        <br />
        <div className="details">
          {(() => {
            switch (section) {
              case "1":
                return (
                  <Timeline
                    name={currentUser.name}
                    timeLineData={currentUser.timeLineData}
                    loginid={currentUser.loginId}
                  />
                );
              case "2":
                return <About aboutData={currentUser.aboutData} />;
              case "3":
                return <Friends myFriends={currentUser.myFriends} />;
              case "4":
                return <Photos />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
