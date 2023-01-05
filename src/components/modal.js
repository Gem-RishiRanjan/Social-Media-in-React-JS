import React from "react";
import "./modal.css";
import { allUsers } from "./data";

function Modal({ showModal, props, comment }) {
  console.log(comment);
  const listItems = comment.map((element) => {
    return (
      <div className="modal1">
        {/* {allUsers
          .filter((people) => people.id == element.commentBy)
          .map((filPer) => ( */}
            <div className="modal2">{element.data.commentBy}</div>
          {/* ))} */}

        <div className="modal3">{element.data.commentText}</div>
      </div>
    );
  });
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div>
          <img className="modal4" src={props} />
        </div>
        <div className="commentdiv">
          <div className="modal5">
            <u className="modal7">Comments</u>
            {listItems}
          </div>
          <button className="modal6" onClick={() => showModal(false)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
