
import React from "react";
import "./modal.css";
import mainimg from "./mainimg.jpg";
import { allUsers } from "./data";

function Modal({ showModal, props, comment }) {
  console.log(comment);
  const listItems = comment.map((element) => {
    return (
      <div
        style={{
          backgroundColor: "#f5f3f0",
          marginTop: "15px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "15px",
        }}
      >
        {allUsers
          .filter((people) => people.id == element.commentBy)
          .map((filPer) => (
            <div
              style={{ paddingLeft: "20px", fontWeight: "bold", color: "blue" }}
            >
              {filPer.name}
            </div>
          ))}

        <div
          style={{
            paddingLeft: "20px",
            marginTop: "5px",
          }}
        >
          {element.commentText}
        </div>
      </div>
    );
  });
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div>
          <img
            src={props}
            style={{
              height: "100%",
              width: "80%",
              borderRadius: "2%",
              marginLeft: "3%",
            }}
          />
        </div>
        <div className="commentdiv">
          <div
            style={{ width: "100%", borderRadius: "4px", margin: "10px 20px" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <u style={{ fontWeight: "bold" }}>Comments</u>
            {listItems}
          </div>
          <button
            style={{
              position: "fixed",
              top: 46,
              right: 66,
              height: 30,
              width: 30,
              borderRadius: 45,
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
            onClick={() => showModal(false)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

