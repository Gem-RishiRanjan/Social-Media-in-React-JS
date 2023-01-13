import React, { useState, useEffect } from "react";
import dhoni from "../images/dhoni.jpg";
import "./findfriends.css";
import Homepageheader from "./homepageheader";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

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
            <img src={e.dp} className="ff4" />
            <div className="ff7">
              {e.name} {e.lastName}
            </div>
            <button
              className="ff6"
              onClick={() => {
                addNotification(e, presentUser[0], index);
              }}
            >
              Add Friend
            </button>
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
  };

  return (
    <div className="ff5">
      <div className="ff8">
        <Homepageheader loginid={userId} />
      </div>
      <div className="ff1">Find Friends</div>
      <div className="ff2">{newFriends}</div>
    </div>
  );
}

export default Findfriends;
