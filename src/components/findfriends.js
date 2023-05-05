import React, { useState, useEffect } from "react";
import addfriend from "../images/addfriend.png";
import cancelfriend from "../images/cancelfriend.png";
import "./findfriends.css";
import Homepageheader from "./homepageheader";
import { db } from "./firebase";
import dpDefault from "../images/dpDefault.jpg";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
  query,
  where,
  arrayUnion,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { async } from "@firebase/util";

function Findfriends() {
  const [allUsers, setAllUsers] = useState([]);
  const [presentUser, setPresentUser] = useState([]);
  const userId = localStorage.getItem("userLoggedIn");
  const usersCollectionRef = collection(db, "allUsers");

  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
  }, []);

  useEffect(() => {
    getCurrentUsers();
  }, []);

  const getCurrentUsers = async () => {
    const queryRef = query(
      collection(db, "allUsers"),
      where("loginId", "==", parseInt(userId))
    );

    onSnapshot(queryRef, (data) => {
      setPresentUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  const newFriends = [];
  const addFriend = () => {
    allUsers.map((e, index) => {
      if (
        presentUser[0].myFriends.includes(e.loginId) == false &&
        e.loginId != presentUser[0].loginId
      ) {
        newFriends.push(
          <div className="ff3">
            {e.dp ? (
              <img src={e.dp} className="ff4" />
            ) : (
              <img src={dpDefault} className="ff4" />
            )}
            <div className="ff7">
              {e.name} {e.lastName}
            </div>

            {presentUser[0].sentRequest.includes(e.loginId) ? (
              <button className="ff9">
                <span>
                  <img src={cancelfriend} className="ff10" />{" "}
                </span>
                <span>Sent Request</span>
              </button>
            ) : (
              <button
                className="ff6"
                onClick={() => {
                  addNotification(e, presentUser[0], index);
                }}
              >
                <span>
                  <img src={addfriend} className="ff11" />{" "}
                </span>
                <span>Add Friend</span>
              </button>
            )}
          </div>
        );
      }
    });
  };
  addFriend();

  const addNotification = async (e, user, index) => {
    const usersProfileRef = collection(db, "notifications");
    await addDoc(usersProfileRef, {
      from: user.loginId,
      msg: user.name + " send you a friend request",
      to: e.loginId,
      type: 1,
    });

    const userDoc = doc(db, "allUsers", e.id);
    const newField = { notification: true };
    updateDoc(userDoc, newField);

    const userDoc5 = doc(db, "allUsers", presentUser[0].id);

    updateDoc(userDoc5, {
      sentRequest: arrayUnion(e.loginId),
    });
  };

  return (
    <div className="ff5">
      <div className="ff8">
        <Homepageheader loginid={userId} />
      </div>
      <br />
      <br />
      <div className="ff1">Find Friends</div>
      <div className="ff2">{newFriends}</div>
    </div>
  );
}

export default Findfriends;
