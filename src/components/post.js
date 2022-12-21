import React, { useRef, useState, useEffect } from "react";
import like from "./like4.png";
import like2 from "./like2.png";
import commentz from "./comment.svg";
import share from "./share.svg";
import Modal from "./modal";
import { Link, useNavigate } from "react-router-dom";
import { allUsers } from "./data";
import like3 from "./like3.png";
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
  const [likez, setLike] = useState(false);
  const [postcom, setPostcom] = useState([]);

  function increase() {
    setCount(count + 1);
    setLike(true);
  }

  function decrease() {
    setCount(count - 1);
    setLike(false);
  }

  const [commod, setCommod] = useState(false);

  const usersCollectionRef = collection(db, "all Posts", comid, "comment");

  useEffect(() => {
    const getPosts = async () => {
      let postarr = [];
      await onSnapshot(usersCollectionRef, async (data) => {
        data.docs.map((doc) => {
          setPostcom([...postcom, { data: doc.data(), id: doc.id }]);
        });
      });
    };
    getPosts();
  }, []);

  useEffect(() => {
    console.log(postcom);
  }, [postcom]);

  const showcom = [];
  const finalize = async () => {
    await addDoc(usersCollectionRef, {
      commentBy: nameElement.current.value,
      commentText: commentElement.current.value,
    });

    nameElement.current.value = "";
    commentElement.current.value = "";
    setCommod(false);
  };

  {
    showcom.push(
      <div>
        <div className="post1">
          {postcom.length > 0 ? postcom[0].data.commentBy : ""}
        </div>

        <div className="post2">

          {postcom.length > 0 ? postcom[0].data.commentText : ""}
        </div>
      </div>
    );

    return (
      <div
        className="postbody"
      >
        <div>
          <div className="post3"
          >
            <button className="post4"
              onClick={() => navigate(`/profile/${postedBy}`)}
            >
              {name}
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {date}&nbsp;&nbsp;&nbsp;&nbsp;
            {time}
          </div>
          <button onClick={() => showModal(true)} style={{ border: "none" }}>
            <img className="post5"
              src={imgsrc}
            />
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
              {likez ? (
                <button className="post6"
                  onClick={decrease}
                >
                  <img src={like3} style={{ height: "25px" }} />
                  &nbsp;Like
                </button>
              ) : (
                <button className="post6"
                  onClick={increase}
                >
                  <img src={like2} style={{ height: "25px" }} />
                  &nbsp;Like
                </button>
              )}
              &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="post6"
                onClick={() => setCommod(!commod)}
              >
                <img
                  src={commentz}
                  style={{ height: "25px", marginRight: "2px" }}
                />
                &nbsp;Comment
              </button>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="post6"
              >
                <img src={share} style={{ height: "25px" }} />
                &nbsp;Share
              </button>
            </div>
          </div>
        </div>
        {commod ? (
          <div style={{ width: "87%", borderRadius: "4px" }}>
            <input
              type="text"
              placeholder="Id(101, 102,103)"
              ref={nameElement}
              value={loginid}
              hidden
            />
            <br />
            <input
              type="text"
              placeholder="Comment"
              ref={commentElement}
            />
            <button
              onClick={finalize}
            >
              Comment
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ width: "87%", borderRadius: "4px" }}>
          <div className="post10"
          >
            {showcom}
          </div>
        </div>

        {modal && (
          <Modal showModal={showModal} props={imgsrc} comment={postcom} />
        )}
      </div>
    );
  }
}

export default Post;