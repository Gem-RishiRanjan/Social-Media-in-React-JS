import React, { useState, useEffect, useRef } from "react";
import fb from "../images/face.png";
import "./homepageheader.css";
import search from "../images/search.webp";
import request from "../images/request.png";
import messenger from "../images/messenger.png";
import bell from "../images/bell.png";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import "./modal.css";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { async } from "@firebase/util";

function Homepageheader({ loginid }) {
  const [allUsers, setAllUsers] = useState([]);
  const [newpost, SetNewPost] = useState(false);
  const [newPostImage, setnewPostImage] = useState();
  const fileInput = useRef(null);
  const navigate = useNavigate();
  var loggedInPerson = 0;
  console.log(loginid);
  const usersCollectionRef = collection(db, "allUsers");

  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);
console.log(allUsers)
  allUsers
    .filter((people) => people.loginId == loginid)
    .map((filPer) => {
      loggedInPerson = filPer;
    });
    console.log(loggedInPerson);

  useEffect(() => {
    const newPostUpload = () => {
      if (newPostImage == null) return;
      const imageref = ref(storage, `/images/${newPostImage.name}`);
      const uploadTask = uploadBytesResumable(imageref, newPostImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);

            const userDoc = collection(db, "all Posts");

            const newPost = async () => {
              const addPost = await addDoc(userDoc, {
                date: "5-Jan-2023",
                imgsrc: downloadURL,
                likeCount: 0,
                name: loggedInPerson.name,
                postedBy: loggedInPerson.loginId,
                time: "1:00pm",
              });
              const newCollectionRef = collection(
                db,
                "all Posts",
                addPost.id,
                "comment"
              );
              await addDoc(newCollectionRef, {
                commentBy: "Shreyas",
                commentText: "Nice",
              });
            };
            newPost();
          });
        }
      );
    };
    newPostUpload();
  }, [newPostImage]);

  return (
    <>
      <div className="mainheader">
        <img className="header6" src={fb} />

        <input className="header1" type="text" placeholder="Search" />
        <img className="header2" src={search} />

        <button
          className="header3"
          onClick={() => navigate(`/profile/${loggedInPerson.loginId}`)}
        >
          {loggedInPerson.name}
        </button>
        <button
          className="header4"
          onClick={() => navigate(`/homepage/${loggedInPerson.loginId}`)}
        >
          Home
        </button>

        <input
          className="header7"
          type="file"
          ref={fileInput}
          onChange={(e) => {
            console.log(e);
            setnewPostImage(e.target.files[0]);
          }}
        />
        {/* <button className="header4" onClick={()=>{SetNewPost(true)}}>New Post</button> */}
        <button
          className="header4"
          onClick={() => {
            fileInput.current.click();
          }}
        >
          {" "}
          New Post
        </button>

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

      {newpost ? (
        <div className="modal-background">
          <div className="modal-container">
            <div></div>
            <div className="commentdiv">
              <div className="modal5">
                <u className="modal7">Comments</u>
                {/* {listItems} */}
              </div>
              <button
                className="modal6"
                onClick={() => {
                  SetNewPost(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Homepageheader;
