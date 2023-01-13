import React, { useState, useEffect, useRef } from "react";
import fb from "../images/fb.svg";
import home from "../images/home.svg";
import plus from "../images/plus.svg";
import exit from "../images/exit.svg";
import friend from "../images/friend.svg";
import offline from "../images/offline.png";
import "./homepageheader.css";
import search from "../images/search.webp";
import request from "../images/request.png";
import messenger from "../images/messenger.png";
import bell from "../images/bell.svg";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { addDoc, arrayUnion, collection, deleteDoc, doc, FieldValue, getDoc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import "./modal.css";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { async } from "@firebase/util";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
 
  const usersCollectionRef = collection(db, "allUsers");

  useEffect(() => {
    const getAllUsers = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getAllUsers();
    
  }, []);

//  const getUser = async()=>{
  allUsers
  .filter((people) => people.loginId == loginid)
  .map((filPer) => {
    loggedInPerson = filPer;
    
  });

//  }



 const getNotifications = () =>{

 
  const queryRef = query(collection(db, "notifications"), where("to", "==", parseInt(loggedInPerson.loginId)));
  onSnapshot(queryRef, (data) => {
    setUserNotify(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  }









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


  const setLogout = ()=>{
    const userDoc = doc(db, "allUsers", loggedInPerson.id);
    const newField = {active: false};
     updateDoc(userDoc, newField);
  }
  
  const deleteNot = async(id)=>{
    const userDoc = doc(db, "notifications", id);
    await deleteDoc(userDoc);

    const userDoc2 = doc(db, "allUsers", loggedInPerson.id);
    const newField = {notification: false};
     updateDoc(userDoc2, newField);
  }
  const acceptRequest=async (from, to,id)=>{

    
  
    const userDoc = doc(db, "allUsers", loggedInPerson.id);


    updateDoc(userDoc,{
      myFriends: arrayUnion(from)
    });

    const queryRef = query(collection(db, "allUsers"), where("loginId", "==", parseInt(from)));
    onSnapshot(queryRef, (data) => {
      setToUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  
    const userDoc2 = doc(db, "allUsers", toUser[0].id);

    updateDoc(userDoc2,{
      myFriends: arrayUnion(to)
    });


   
  }


const allNotifications = [];

if(userNotify.length > 0){
  allNotifications.push(
    <div className="header13">
      {userNotify.map((e)=>{
      return(
    <>
    <div className="header14">
          {e.msg}
      </div> 
        {
          e.type == 1 ?
          <>
          <button onClick={()=>{acceptRequest(e.from, e.to,e.id); deleteNot(e.id)} }>Accept</button>
            <button onClick={()=>deleteNot(e.id) }>Decline</button>
          </>
            :
            ""
          
        }
    </>
      
    );
    })}
  </div>
  )
}


  


 



  return (
    <>
      <div className="mainheader">
        <img className="header6" src={fb} />

        <input className="header1" type="text" placeholder="Search" />
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
        <img className="header9" src={home} onClick={() => navigate(`/homepage/${loggedInPerson.loginId}`)} /> 
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
        > */}
          {" "}
          <img className="header9" src={plus} onClick={() => {fileInput.current.click();}} />
        {/* </button> */}
        <img className="header5" src={friend} onClick={() => navigate("/findfriends")}/>

        {
          loggedInPerson.notification ?   
          <div>
            <img className="header5" src={bell} onClick={()=>{setNotification(!notification); getNotifications(); }} />
            <img className="header12" src={offline} />
          </div>    
          
          :
          <img className="header5" src={bell} />
        }



          <div className="header8">
            
        {/* <img className="header5" src={request} />
        <img className="header5" src={messenger} />
        <img className="header5" src={bell} /> */}
        
        
        <img src={exit} className="header11" onClick={() => {
            setLogout();
            navigate("/mainpage");
            localStorage.setItem("islogin", 0);
          }} />

<img className="header10" src={loggedInPerson.dp} onClick={() => navigate(`/profile/${loggedInPerson.loginId}`)} />

          </div>
      </div>

      {
        notification ? 
        allNotifications
      :
      ""
      }
    </>
  );
}

export default Homepageheader;
