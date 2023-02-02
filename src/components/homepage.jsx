import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./homepage.css";

import Homepageheader from "./homepageheader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import online from "../images/online.png";
import offline from "../images/offline.png";
import Post from "./post";
import ad1 from "../images/ad1.gif";
import ad2 from "../images/ad2.gif";
import ad3 from "../images/ad3.gif";
import ad4 from "../images/ad4.gif";
import ad5 from "../images/ad5.gif";
import ad6 from "../images/ad6.gif";
import ad7 from "../images/ad7.gif";
import ad8 from "../images/ad8.gif";
import ad9 from "../images/ad9.gif";
import ad10 from "../images/ad10.gif";
import { db, storage } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { allUsers } from "./data";
import { async } from "@firebase/util";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Homepage() {
  const navigate = useNavigate();

  // const { loginid } = useParams();

  const loginid = localStorage.getItem("userLoggedIn");

  const usersCollectionRef = query(
    collection(db, "all Posts"),
    orderBy("timestamp", "desc")
  );

  const [modal, showModal] = useState(false);
  const [currentUser, setAllUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [presentUser, setPresentUser] = useState([]);
  const [recentNotify, setRecentNotify] = useState([]);
  const [newPostImage, setnewPostImage] = useState();
  var loggedInPerson = [];
  const logg = localStorage.getItem("islogin");
  const fileInput = useRef(null);

  const userstate = [online, offline];
  useEffect(() => {
    if (logg == 0) {
      navigate("/mainpage");
    } else {
    }
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getPosts();
  }, []);

  useEffect(() => {
    // async function myfun(){
    getCurrentUsers();
    // updateActive();
    // }

    // myfun();
  }, []);

  const getCurrentUsers = async () => {
    const queryRef = query(
      collection(db, "allUsers"),
      where("loginId", "==", parseInt(loginid))
    );

    onSnapshot(queryRef, (data) => {
      setPresentUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  if (presentUser.length > 0 && presentUser[0].active == false) {
    // alert(presentUser[0].id);

    const userDoc = doc(db, "allUsers", presentUser[0].id);
    const newField = { active: true };
    updateDoc(userDoc, newField);
  }

  // const queryRef = query(collection(db, "allUsers"), where("loginId", "==", parseInt(loginid)));
  //
  // const newField = {lastName: "KungFu"};
  // if(updateDoc(queryRef, newField)){alert("hello");}

  let valuesA = [];
  const frienList = [];
  if (presentUser.length > 0) {
    valuesA = Object.values(presentUser[0].myFriends);

    valuesA.map((e) => {
      currentUser.map((friend) => {
        if (friend.loginId === e) {
          const isActive = friend.active;
          frienList.push(
            <div
              className="home9"
              key="index"
              onClick={() => navigate(`/profile/${friend.loginId}`)}
            >
              <span>
                <img className="home10" src={friend.dp} />

                {isActive ? (
                  <img className="home12" src={online} />
                ) : (
                  <img className="home12" src={offline} />
                )}
              </span>
              <span className="home11">
                {friend.name} {friend.lastName}
              </span>
            </div>
          );
        }
      });
    });
  }

  // valuesA.map((e)=>{

  // })

  // valuesArray.map((e)=>{

  // })

  // useEffect(()=>{
  //   presentUser[0].map((e)=>{

  //   })
  // })

  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(collection(db, "allUsers"), (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);

  var i = 0;
  currentUser
    .filter((people) => people.loginId != loginid)
    .map((filPer) => {
      if (i < 8) {
        loggedInPerson.push(filPer);
      }
      i++;
    });

  useEffect(() => {
    const getAllNotifications = async () => {
      const userRecentNotifcation = query(
        collection(db, "recent"),
        // orderBy("timestamp", "desc"),
        where("from", "in", presentUser[0].myFriends)
      );
      onSnapshot(userRecentNotifcation, (data) => {
        setRecentNotify(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    };
    if (presentUser.length > 0) getAllNotifications();
  }, [presentUser]);
  // console.log(recentNotify);

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

              var today = new Date();
              var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              var currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
             
              const addPost = await addDoc(userDoc, {
                date: currentDate,
                imgsrc: downloadURL,
                likeCount: 0,
                name: presentUser[0].name,
                postedBy: presentUser[0].loginId,
                time: currentTime,
                timestamp: Date.now(),
              });
              // const newCollectionRef = collection(
              //   db,
              //   "all Posts",
              //   addPost.id,
              //   "comment"
              // );
              // await addDoc(newCollectionRef, {
              //   commentBy: "Shreyas",
              //   commentText: "Nice",
              // });
            };
            newPost();
          });
        }
      );
    };
    newPostUpload();

  }, [newPostImage]);

  return (
    <div className="home">
      <div style={{ position: "fixed", zIndex: "1" }}>
        <Homepageheader loginid={loginid} />
      </div>
      {/* <br /> */}
      <br />
      <div className="sides">
        <div className="leftbody">
          <div
            className="home7"
            onClick={() => navigate(`/profile/${presentUser[0].loginId}`)}
          >
            <span>
              {presentUser.length > 0 ? (
                <img className="home5" src={presentUser[0].dp} />
              ) : (
                ""
              )}
            </span>
            <span className="home6">
              {presentUser.length > 0 ? presentUser[0].name : ""}
              {presentUser.length > 0 ? presentUser[0].lastName : ""}
            </span>
          </div>
          <div className="home1">
            <span className="home3">
              <u>Friends</u>
            </span>
          </div>
          <div className="home8">{frienList}</div>
        </div>

        <div className="body">
          <br />
          {posts.map((e) => {
            return (
              <div key={e.id}>
                <Post
                  name={e.name}
                  date={e.date}
                  time={e.time}
                  imgsrc={e.imgsrc}
                  likeCount={e.likeCount}
                  postedBy={e.postedBy}
                  loginid={loginid}
                  comid={e.id}
                />
              </div>
            );
          })}
        </div>

        <div className="rightbody">
          <div className="home15">Recent Activities</div>
          <div className="home16">
            {recentNotify.map((e) => {
              return (
                <>
                  <div className="home14">{e.msg}</div>
                </>
              );
            })}
          </div>
          <input
            className="home18"
            type="file"
            ref={fileInput}
            onChange={(e) => {
              setnewPostImage(e.target.files[0]);
            }}
          />
          <button
            className="home17"
            onClick={() => {
              fileInput.current.click();
            }}
          >
            Add New Post
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Homepage;
