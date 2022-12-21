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
  const [check, setCheck] = useState("1");
  const [allUsers, setAllUsers] = useState([]);
  const usersCollectionRef = collection(db, "allUsers");

  const { id } = useParams();
  console.log(id);
  var abcd = 0;
  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    if (getAllUsers()) {
      alert("useEffect working");
    }
  }, []);
  console.log(allUsers);
  allUsers
    .filter((people) => people.loginId == id)
    .map((filPer) => {
      abcd = filPer;
    });

  console.log(abcd);

  return (
    <div>
      <Homepageheader loginid={id} />

      <div className="profile">
        <div className="image">
          <img src={abcd.coverpic} style={{ height: "100%", width: "100%" }} />
          <img className="profile1" src={abcd.dp} />
          <span className="profile2">{abcd.name}</span>
          <br />
        </div>
        <div className="about">
          <button className="timeline" onClick={() => setCheck("1")}>
            Timeline
          </button>
          <button className="timeline" onClick={() => setCheck("2")}>
            {" "}
            About{" "}
          </button>
          <button className="timeline" onClick={() => setCheck("3")}>
            Friends
          </button>
          <button className="timeline" onClick={() => setCheck("4")}>
            Photos
          </button>
          <button className="timeline">More</button>
        </div>
        <br />
        <div className="details">
          {(() => {
            switch (check) {
              case "1":
                return (
                  <Timeline
                    name={abcd.name}
                    timeLineData={abcd.timeLineData}
                    loginid={abcd.loginId}
                  />
                );
              case "2":
                return <About aboutData={abcd.aboutData} />;
              case "3":
                return <Friends myFriends={abcd.myFriends} />;
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
