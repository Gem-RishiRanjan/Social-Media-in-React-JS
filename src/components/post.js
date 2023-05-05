import React, { useRef, useState, useEffect } from "react";
import like from "../images/like10.png";
import like2 from "../images/like2.png";
import commentz from "../images/comment.svg";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import like3 from "../images/like3.png";
import { db } from "./firebase";
import "./post.css";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  getDocs,
} from "firebase/firestore";
import { async } from "@firebase/util";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  // console.log(name);

  const [modal, showModal] = useState(false);
  const [count, setCount] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const [commentUser, setCommentUser] = useState([]);

  const navigate = useNavigate();

  const nameElement = useRef(null);
  const commentElement = useRef(null);

  const increase = async () => {
    const userDoc = doc(db, "all Posts", comid);
    const newField = { likeCount: likeCount + 1 };
    updateDoc(userDoc, newField);
    setCount(count + 1);
    setIsLiked(true);

    const usersProfileRef = collection(db, "notifications");
    addDoc(usersProfileRef, {
      from: loggedInPerson.loginId,
      msg: loggedInPerson.name + " liked your Post",
      to: postedBy,
      type: 2,
    });
    const userDocs = query(
      collection(db, "allUsers"),
      where("loginId", "==", postedBy)
    );
    const querySnapshot = await getDocs(userDocs);
    querySnapshot.forEach((docq) => {
      // doc.data() is never undefined for query doc snapshots

      const userDoc3 = doc(db, "allUsers", docq.id);
      const newFields = { notification: true };
      updateDoc(userDoc3, newFields);
    });

    const usersProfileRecent = collection(db, "recent");
    addDoc(usersProfileRecent, {
      from: loggedInPerson.loginId,
      msg: loggedInPerson.name + " liked " + name + "'s Post",
      timestamp: Date.now(),
      to: postedBy,
    });

    toast.success("Post Liked", {
      position: "bottom-left",
    })

  };

  function decrease() {
    const userDoc = doc(db, "all Posts", comid);
    const newField = { likeCount: likeCount - 1 };
    updateDoc(userDoc, newField);
    setCount(count - 1);
    setIsLiked(false);
  }

  var loggedInPerson = 0;

  const usersCollectionRef = query(
    collection(db, "all Posts", comid, "comment"),
    orderBy("timestamp", "desc")
  );

  // console.log(usersCollectionRef);

  useEffect(() => {
    const getPosts = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setPostComments(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    };
    getPosts();
  }, []);

  // useEffect(() => {
  //   console.log(postComments);
  // },[postComments])

  // useEffect(() => {
  // const getPosts = async () => {
  //   let postarr = [];
  //   await onSnapshot(usersCollectionRef, async (data) => {
  //     data.docs.map((doc) => {
  //       setPostComments([...postComments, { data: doc.data(), id: doc.id }]);
  //       console.log(postComments);
  //     });
  //   });
  // };
  // getPosts();
  // }, []);

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

  const showcom = [];
  const finalize = async () => {
    await addDoc(collection(db, "all Posts", comid, "comment"), {
      commentBy: nameElement.current.value,
      commentText: commentElement.current.value,
      timestamp: Date.now(),
    });

    nameElement.current.value = "";
    commentElement.current.value = "";

    const usersProfileRef = collection(db, "notifications");
    addDoc(usersProfileRef, {
      from: loggedInPerson.loginId,
      msg: loggedInPerson.name + " commented on your Post",
      to: postedBy,
      type: 2,
    });
    const userDocs = query(
      collection(db, "allUsers"),
      where("loginId", "==", postedBy)
    );
    const querySnapshot = await getDocs(userDocs);
    querySnapshot.forEach((docq) => {
      // doc.data() is never undefined for query doc snapshots

      const userDoc3 = doc(db, "allUsers", docq.id);
      const newFields = { notification: true };
      updateDoc(userDoc3, newFields);
    });

    const usersProfileRecent = collection(db, "recent");
    addDoc(usersProfileRecent, {
      from: loggedInPerson.loginId,
      msg: loggedInPerson.name + " commented on " + name + "'s Post",
      timestamp: Date.now(),
      to: postedBy,
    });
    toast.success("Commented on post", {
      position: "bottom-left",
    })
  };

  {
    return (
      <div className="postbody">
        <div className="post3">
          Posted By{" "}
          <button
            className="post4"
            onClick={() => navigate(`/profile/${postedBy}`)}
          >
            {name}
          </button>
          on
          <span className="post16">{date}</span>at
          <span className="post16">{time}</span>
        </div>
        <img className="post5" src={imgsrc} onClick={() => showModal(true)} />

        <div>
          <span>
            <img className="post13" src={like} />
            <u>{count} likes</u>
          </span>

          <br />

          <div className="post14">
            {isLiked ? (
              <button className="post6" onClick={decrease}>
                <img src={like3} className="post15" />
                &nbsp;Like
              </button>
            ) : (
              <button className="post6" onClick={increase}>
                <img src={like2} className="post15" />
                &nbsp;Like
              </button>
            )}
            <img
              src={commentz}
              style={{ height: "25px", marginRight: "2px" }}
            />
            &nbsp;Comment
          </div>
        </div>

        {postComments.length > 0 ? (
          <div className="post10">
            <div className="post1">{postComments[0].commentBy}</div>

            <div className="post2">{postComments[0].commentText}</div>
          </div>
        ) : (
          ""
        )}

        {/* <div className="post10">
          <div className="post1">
            {postComments.length > 0 ? postComments[0].commentBy : ""}
          </div>
  
          <div className="post2">
            {postComments.length > 0 ? postComments[0].commentText : ""}
          </div>
        </div> */}

        {/* {showcom} */}

        <div>
          <input
            type="text"
            ref={nameElement}
            value={loggedInPerson.name}
            hidden
          />
          <input
            className="post11"
            type="text"
            placeholder="Please type your comments here"
            ref={commentElement}
          />
          <FiSend className="post12" onClick={finalize} />
        </div>

        {modal && postComments && (
          <Modal showModal={showModal} props={imgsrc} comment={postComments} />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default Post;
