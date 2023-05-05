import React, { useState, useEffect, useRef } from "react";
import ReactLoading from "react-loading";
import "./profile.css";
import camera from "../images/camera.png";
import defaultCoverPic from "../images/defaultCoverPic.jfif";
import dpDefault from "../images/dpDefault.jpg";
import Timeline from "./timeline";
import About from "./about";
import Friends from "./friends";
import Homepageheader from "./homepageheader";
import Photos from "./photos";
import pngCamera from "../images/pngCamera.png";
import { useLocation, useParams } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { allUsers } from "./data";

function Profile() {
    const userId = localStorage.getItem("userLoggedIn");
  const { id } = useParams();
  const [section, setSection] = useState("1");
  const [currentUser, setAllUsers] = useState([]);
  const fileInput = useRef(null);
  const dpFileInput = useRef(null);
  const usersCollectionRef = collection(db, "allUsers");
  const [image, setImage] = useState(null);
  const [dpimage, setDpImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(100);
  const [viewUpload, setUpload] = useState(true);

  useEffect(() => {
    getAllUsers();
  },[]);

  const getAllUsers = async () => {
    const queryRef = query(usersCollectionRef, where("loginId", "==", parseInt(id)));
    onSnapshot(queryRef, (data) => {
      setAllUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    const upload = () => {
      if (image == null) return;
      const imageref = ref(storage, `/images/${image.name}`);
      const uploadTask = uploadBytesResumable(imageref, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setUploadProgress(progress);
          setUpload(true);
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            const userDoc = doc(db, "allUsers", currentUser[0].id);
            const newField = { coverpic: downloadURL };
            updateDoc(userDoc, newField);
          });
        }
      );
    };
    upload();
  }, [image]);

  useEffect(() => {
    const dpUpload = () => {
      if (dpimage == null) return;
      const imageref = ref(storage, `/images/${dpimage.name}`);
      const uploadTask = uploadBytesResumable(imageref, dpimage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log("Upload is " + progress + "% done");
          setUploadProgress(progress);
          setUpload(true);
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
            const userDoc = doc(db, "allUsers", currentUser[0].id);
            const newField = { dp: downloadURL };
            updateDoc(userDoc, newField);
          });
        }
      );
    };
    dpUpload();
  }, [dpimage]);

  return (
    <div className="profile19">
      <div className="profile20">
      <Homepageheader loginid={userId} />
      </div>
      <br/><br />

      <div className="profile">
        <div className="image">
          {currentUser.length > 0 && currentUser[0].coverpic.length > 0 ? (
            <img className="profile7" src={currentUser[0].coverpic} />
          ) : (
            <img
              className="profile7"
              src={defaultCoverPic}
              onClick={() => {
                fileInput.current.click();
              }}
            />
          )}

          <input
            className="profile5"
            type="file"
            ref={fileInput}
            onChange={(e) => {
              
              setImage(e.target.files[0]);
            }}
          />
          {/* {
            currentUser.coverpic.length > 0 ?
            <button
            className="profile3"
            onClick={() => {
              fileInput.current.click();
            }}
          >
            Change Image
          </button>
          : */}
          <button
            className="profile3"
            onClick={() => {
              fileInput.current.click();
            }}
          >
            <img className="profile15" src={pngCamera} />
          </button>

          {currentUser.length > 0 && currentUser[0].dp.length > 0 ? (
            <img className="profile1" src={currentUser[0].dp} />
          ) : (
            <img
              className="profile1"
              src={dpDefault}
              onClick={() => {
                dpFileInput.current.click();
              }}
            />
          )}

          <input
            className="profile6"
            type="file"
            ref={dpFileInput}
            onChange={(e) => {
              setDpImage(e.target.files[0]);
            }}
          />
          <button
            className="profile4"
            onClick={() => {
              dpFileInput.current.click();
            }}
          >
            <img className="profile14" src={pngCamera} />
          </button>

          {viewUpload && uploadProgress < 100 ? (
            <div className="profile9">
              <br />
              <br />
              <span className="profile12">
                Upload is {uploadProgress} % done
              </span>

              <div className="profile10">
                <ReactLoading
                  type="spin"
                  color="#0000FF"
                  height={150}
                  width={75}
                />
              </div>

              {/*               
              <button
                className="profile13"
                onClick={() => {
                  setUpload(false);
                }}
              >
                Close
              </button> */}
            </div>
          ) : (
            ""
          )}

          <br />
        </div>
        <div className="profile16">{
              currentUser.length > 0 ? currentUser[0].name + " "+ currentUser[0].lastName:""
            }
        </div>
        <div className="profile17"></div>
        <div>
          <div className="about">
            <button className="timeline" onClick={() => setSection("1")}>
              Timeline
            </button>
            <button className="timeline" onClick={() => setSection("2")}>
              {" "}
              About{" "}
            </button>
            <button className="timeline" onClick={() => setSection("3")}>
              Friends
            </button>
            <button className="timeline" onClick={() => setSection("4")}>
              Photos
            </button>
            <button className="timeline">More</button>
          </div>
          
        </div>

        <br />
        <div className="details">
          {(() => {
            switch (section) {
              case "1":
                return (
                  <>
                    {currentUser.length > 0 ? (
                      <Timeline
                        name={currentUser[0].name}
                        timeLineData={currentUser[0].timeLineData}
                        loginId={currentUser[0].loginId}
                      />
                    ) : (
                      ""
                    )}
                  </>
                );
              case "2":
                return <About aboutData={currentUser[0].aboutData} />;
              case "3":
                return <Friends myFriends={currentUser[0].myFriends} />;
              case "4":
                return <Photos />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
