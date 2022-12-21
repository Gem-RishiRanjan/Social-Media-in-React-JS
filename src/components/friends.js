import React from "react";
import dhoni from "./dhoni.jpg";
import "./friends.css";
import { allUsers } from "./data";
import { useNavigate } from "react-router-dom";

function Friends({ myFriends }) {
  const navigate = useNavigate();
  const friendzs = [];
  myFriends.forEach((element) => {
    allUsers
      .filter((people) => people.id == element)
      .map((filPer) => {
        friendzs.push(
          <div className="friendcard">
            <img
              src={filPer.dp}
              style={{ borderRadius: "80px", width: "125px", height: "125px" }}
            />
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                <button
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    border: "none",
                  }}
                  onClick={() => navigate(`/profile/${filPer.id}`)}
                >
                  {filPer.name}
                </button>
              </span>
              <br />

              <span
                style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
              >
                {" "}
                <u>Friends</u>{" "}
              </span>
            </div>
          </div>
        );
      });
  });
  return <div className="friends">{friendzs}</div>;
}

<div className="friends">
  <div className="friendcard">
    <img
      src={dhoni}
      style={{ borderRadius: "80px", width: "125px", height: "125px" }}
    />
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <span style={{ fontSize: "25px", fontWeight: "bold" }}>
        <button
          style={{ fontSize: "25px", fontWeight: "bold", border: "none" }}
          onClick={() => alert("hello")}
        >
          Dhoni
        </button>
      </span>
      <br />

      <span style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>
        {" "}
        <u>Friends</u>{" "}
      </span>
    </div>
  </div>
</div>;


export default Friends;
