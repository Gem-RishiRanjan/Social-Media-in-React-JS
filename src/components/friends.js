import React from "react";
import dhoni from "../images/dhoni.jpg";
import "./friends.css";
import { allUsers } from "./data";
import { useNavigate } from "react-router-dom";

function Friends({ myFriends }) {
  const navigate = useNavigate();
  const friendDetails = [];
  myFriends.forEach((element) => {
    allUsers
      .filter((people) => people.id == element)
      .map((filterPerson) => {
        friendDetails.push(
          <div className="friendcard">
            <img className="friend1" src={filterPerson.dp} />
            <div className="friend2">
              <span className="friend3">
                <button
                  className="friend3"
                  onClick={() => navigate(`/profile/${filterPerson.id}`)}
                >
                  {filterPerson.name}
                </button>
              </span>
              <br />

              <span className="friend4">
                {" "}
                <u>Friends</u>{" "}
              </span>
            </div>
          </div>
        );
      });
  });
  return <div className="friends">{friendDetails}</div>;
}

<div className="friends">
  <div className="friendcard">
    <img className="friend1" src={dhoni} />
    <div className="friend2">
      <span className="friend3">
        <button className="friend3" onClick={() => alert("hello")}>
          Dhoni
        </button>
      </span>
      <br />

      <span className="friend5">
        {" "}
        <u>Friends</u>{" "}
      </span>
    </div>
  </div>
</div>;

export default Friends;
