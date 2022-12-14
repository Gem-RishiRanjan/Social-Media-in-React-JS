import React, { useRef, useState, useEffect } from "react";
import like from "../images/like4.png";
import like2 from "../images/like2.png";
import commentz from "../images/comment.svg";
import share from "../images/share.svg";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";
import {FiSend} from "react-icons/fi";
import like3 from "../images/like3.png";
import { db } from "./firebase";
import "./post.css";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

function Post({
  date,
  name,
  time,
  imgsrc,
  postedBy,
  likeCount,
  loginid,
  comid,
}) {
  const [modal, showModal] = useState(false);
  const navigate = useNavigate();
  const [count, setCount] = useState(likeCount);
  const nameElement = useRef(null);
  const commentElement = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const [commentUser, setCommentUser] = useState([]);

  // console.log(loginid)
  function increase() {

    const userDoc = doc(db, "all Posts", comid);
    const newField = {likeCount: likeCount+1};
     updateDoc(userDoc, newField);



    setCount(count + 1);
    setIsLiked(true);
  }

  function decrease() {
    const userDoc = doc(db, "all Posts", comid);
    const newField = {likeCount: likeCount-1};
     updateDoc(userDoc, newField);
    setCount(count - 1);
    setIsLiked(false);
  }

  const [modalComment, setModalComment] = useState(true);
  var loggedInPerson = 0;

  const usersCollectionRef = collection(db, "all Posts", comid, "comment");

  useEffect(() => {
    const getPosts = async () => {
      let postarr = [];
      await onSnapshot(usersCollectionRef, async (data) => {
        data.docs.map((doc) => {
          setPostComments([...postComments, { data: doc.data(), id: doc.id }]);
        });
      });
    };
    getPosts();
  }, []);

  const usersCollectionRefer = collection(db, "allUsers");
  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRefer, (data) => {
        setCommentUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);

  commentUser
    .filter((people) => people.loginId == loginid)
    .map((filPer) => {
      loggedInPerson = filPer;
    });

  useEffect(() => {
    // console.log(postComments);
  }, [postComments]);

  const showcom = [];
  const finalize = async () => {
    await addDoc(usersCollectionRef, {
      commentBy: nameElement.current.value,
      commentText: commentElement.current.value,
    });

    nameElement.current.value = "";
    commentElement.current.value = "";
    setModalComment(true);
  };

  {
    showcom.push(
      <div>
        <div className="post1">
          {postComments.length > 0 ? postComments[0].data.commentBy : ""}
        </div>

        <div className="post2">
          {postComments.length > 0 ? postComments[0].data.commentText : ""}
        </div>
      </div>
    );

    console.log(postComments);

    return (
      <div className="postbody">
        <div>
          <div className="post3">
            <button
              className="post4"
              onClick={() => navigate(`/profile/${postedBy}`)}
            >
              {name}
            </button>{" "}
            {date} {time}
          </div>
          <button onClick={() => showModal(true)} style={{ border: "none" }}>
            <img className="post5" src={imgsrc} />
          </button>

          <div>
            <span>
              <br />
              <img
                src={like}
                style={{
                  height: "25px",
                }}
              />
              &nbsp;&nbsp;<u>Virat Kohli and {count} others</u>
            </span>

            <br />

            <div style={{ backgroundColor: "#edf2f7" }}>
              {isLiked ? (
                <button className="post6" onClick={decrease}>
                  <img src={like3} style={{ height: "25px" }} />
                  &nbsp;Like
                </button>
              ) : (
                <button className="post6" onClick={increase}>
                  <img src={like2} style={{ height: "25px" }} />
                  &nbsp;Like
                </button>
              )}
              &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="post6"
                onClick={() => setModalComment(modalComment)}
              >
                <img
                  src={commentz}
                  style={{ height: "25px", marginRight: "2px" }}
                />
                &nbsp;Comment
              </button>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <button className="post6" onClick = {()=>{alert("Share functionality in testing phase, soon it will be live")}}>
                  <img src={share} style={{ height: "25px" }} />
                  &nbsp;Share
                </button> */}
            </div>
          </div>
        </div>
        {modalComment ? (
          <div style={{ width: "87%", borderRadius: "4px" }}>
            <input
              type="text"
              placeholder="Id(101, 102,103)"
              ref={nameElement}
              value={loggedInPerson.name}
              hidden
            />
            <br />
            <input className="post11" type="text" placeholder="Please type your comments here" ref={commentElement} />
            <button className="post12" onClick={finalize}>
            <FiSend className="post12"/>
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ width: "87%", borderRadius: "4px" }}>
          <div className="post10">{showcom}</div>
        </div>

        {modal && postComments && (
          <Modal showModal={showModal} props={imgsrc} comment={postComments} />
        )}
      </div>
    );
  }
}

export default Post;
