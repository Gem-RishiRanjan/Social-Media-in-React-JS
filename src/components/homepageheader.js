import React, { useState, useEffect, useRef } from "react";
import fb from "../images/fb.svg";
import home from "../images/home.svg";
import plus from "../images/plus.svg";
import exit from "../images/exit.svg";
import friend from "../images/friend.svg";
import offline from "../images/online.png";
import accept from "../images/accept.svg";
import decline from "../images/decline.svg";
import "./homepageheader.css";
import search from "../images/search.webp";
import request from "../images/request.png";
import messenger from "../images/messenger.png";
import bell from "../images/bell.svg";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  FieldValue,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  startAt,
  updateDoc,
  where,
} from "firebase/firestore";
import "./modal.css";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { async } from "@firebase/util";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Homepageheader({ loginid }) {
  const [allUsers, setAllUsers] = useState([]);
  const [newpost, SetNewPost] = useState(false);
  const [newPostImage, setnewPostImage] = useState();
  const [userNotify, setUserNotify] = useState([]);
  const [notification, setNotification] = useState(true);
  const [toUser, setToUser] = useState();
  const fileInput = useRef(null);
  const navigate = useNavigate();
  var loggedInPerson = 0;
  const [callFriend, setCallFriend] = useState(false);
  const searchInput = useRef(null);
  const [searchField, setSearchField] = useState("");
  const [fromNotify, setFromNotify] = useState(0);
  const [searchArray, setSearchArray] = useState([]);

  const usersCollectionRef = collection(db, "allUsers");

  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);

  // console.log(allUsers);

  //  const getUser = async()=>{
  allUsers
    .filter((people) => people.loginId == loginid)
    .map((filPer) => {
      loggedInPerson = filPer;
    });

  //  }

  const getNotifications = () => {
    const queryRef = query(
      collection(db, "notifications"),
      where("to", "==", parseInt(loggedInPerson.loginId))
    );
    onSnapshot(queryRef, (data) => {
      setUserNotify(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

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

  const setLogout = () => {
    const userDoc = doc(db, "allUsers", loggedInPerson.id);
    const newField = { active: false };
    updateDoc(userDoc, newField);
  };

  const deleteNot = async (id) => {
    const userDoc = doc(db, "notifications", id);
    await deleteDoc(userDoc);

    const userDoc2 = doc(db, "allUsers", loggedInPerson.id);
    const newField = { notification: false };
    updateDoc(userDoc2, newField);
  };

  useEffect(() => {
    if (callFriend) acceptRequest();
  }, [toUser]);

  const setUser = (from) => {
    console.log(from);
    setFromNotify(from);

    const queryRef = query(
      collection(db, "allUsers"),
      where("loginId", "==", parseInt(from))
    );

    // console.log(from, to);
    onSnapshot(queryRef, (data) => {
      setToUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    setCallFriend(true);
  };

  const acceptRequest = () => {
    // console.log(from, to);
    const userDoc = doc(db, "allUsers", loggedInPerson.id);
    updateDoc(userDoc, {
      myFriends: arrayUnion(fromNotify),
    });

    const userDoc2 = doc(db, "allUsers", toUser[0].id);

    console.log(userDoc2);

    updateDoc(userDoc2, {
      myFriends: arrayUnion(loggedInPerson.loginId),
    });
  };

  const allNotifications = [];

  if (userNotify.length > 0) {
    allNotifications.push(
      <div className="header13">
        {userNotify.map((e) => {
          return (
            <>
              <div className="header14">
                {e.msg}

                {e.type == 1 ? (
                  <>
                    <img
                      className="header17"
                      src={decline}
                      onClick={() => deleteNot(e.id)}
                    />
                    <img
                      className="header17"
                      src={accept}
                      onClick={() => {
                        setUser(e.from);
                        deleteNot(e.id);
                      }}
                    />
                  </>
                ) : (
                  ""
                )}

                {e.type == 2 ? (
                  <img
                    className="header17"
                    src={decline}
                    onClick={() => deleteNot(e.id)}
                  />
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
      </div>
    );
  }

  useEffect(() => {
    searchName();
  }, [searchField]);

  const searchName = () => {
    setSearchArray([]);
    // console.log(searchField)
    allUsers.filter((val) => {
      if (searchField == "") {
        // console.log(val);
        return val;
      } else if (
        val.name.toLowerCase().startsWith(searchField.toLowerCase()) ||
        val.lastName.toLowerCase().startsWith(searchField.toLowerCase())
      ) {
        // console.log(val.name);
        setSearchArray((oldVal) => {
          return [val, ...oldVal];
        });
      }
    });
  };

  // console.log(searchArray);
  // console.log(searchField.length)

  return (
    <>
      <div className="mainheader">
        <img
          className="header6"
          src={fb}
          onClick={() => navigate(`/homepage/${loggedInPerson.loginId}`)}
        />
        <input
          className="header1"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchField(e.target.value);
          }}
          ref={searchInput}
          onBlur={() => {
            setSearchField("");
          }}
        />
        {/* <img className="header2" src={search} /> */}
        {/* <button
          className="header3"
          onClick={() => navigate(`/profile/${loggedInPerson.loginId}`)}
        >
          {loggedInPerson.name}
        </button> */}
        {/* <button
          className="header4"
          onClick={() => navigate(`/homepage/${loggedInPerson.loginId}`)}
        > */}
        <img
          className="header9"
          src={home}
          onClick={() => navigate(`/homepage/${loggedInPerson.loginId}`)}
        />
        {/* </button> */}
        <input
          className="header7"
          type="file"
          ref={fileInput}
          onChange={(e) => {
            setnewPostImage(e.target.files[0]);
          }}
        />
        {/* <button className="header4" onClick={()=>{SetNewPost(true)}}>New Post</button> */}
        {/* <button
          className="header4"
          onClick={() => {
            fileInput.current.click();
          }}
        > */}{" "}
        <img
          className="header9"
          src={plus}
          onClick={() => {
            fileInput.current.click();
          }}
        />
        {/* </button> */}
        <img
          className="header5"
          src={friend}
          onClick={() => navigate("/findfriends")}
        />
        {loggedInPerson.notification ? (
          <div>
            <img
              className="header5"
              src={bell}
              onClick={() => {
                setNotification(!notification);
                getNotifications();
              }}
            />
            <img className="header12" src={offline} />
          </div>
        ) : (
          <img className="header5" src={bell} />
        )}
        <div className="header8">
          {/* <img className="header5" src={request} />
        <img className="header5" src={messenger} />
        <img className="header5" src={bell} /> */}

          <img
            src={exit}
            className="header11"
            onClick={() => {
              setLogout();
              navigate("/mainpage");
              localStorage.setItem("islogin", 0);
            }}
          />

          <img
            className="header10"
            src={loggedInPerson.dp}
            onClick={() => navigate(`/profile/${loggedInPerson.loginId}`)}
          />
        </div>
      </div>

      <div>
        <span className="header16">
          {searchField.length > 0 ? (
            <div className="header18">
              {searchArray.map((e) => {
                {
                  /* console.log(searchArray.length);  */
                }

                return (
                  <div
                    className="header19"
                    onClick={() => navigate(`/profile/${e.loginId}`)}
                  >
                    {e.name} {e.lastName}{" "}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </span>

        <span>{notification ? allNotifications : ""}</span>
      </div>
    </>
  );
}

export default Homepageheader;
