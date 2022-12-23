import React, { useState, useRef } from "react";
import signupPageIcon from "../images/pic14.png";
import NameIcon from "../images/pic9.svg";
import emailIcon from "../images/pic11.svg";
import phoneIcon from "../images/pic12.svg";
import paswordIcon from "../images/pic13.svg";
import "./style.css";

import { Link, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function Signup() {
  const [error, setError] = useState(null);
  const [phoneerror, setPhoneError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const navigate = useNavigate();
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const validPhone = new RegExp("[1-9][0-9]{7,14}$");
  const emailElement = useRef(null);
  const passwordElement = useRef(null);
  const phoneElement = useRef(null);
  const confirmPasswordElement = useRef(null);

  const usersCollectionRef = collection(db, "loginDetails");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPassword(password) {
    return validPassword.test(password);
  }

  function isValidPhone(phone) {
    return validPhone.test(phone);
  }

  const handleChange = (emailElement) => {
    if (!isValidEmail(emailElement.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
  };

  const handlePassword = (passwordElement) => {
    if (!isValidPassword(passwordElement.target.value)) {
      setPasswordError("Password is invalid");
    } else {
      setPasswordError(null);
    }
  };

  const handleConfirmPassword = (confirmPasswordElement) => {
    if (
      isValidPassword(passwordElement.current.value) !=
      isValidPassword(confirmPasswordElement.target.value)
    ) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError(null);
    }
  };

  const handlePhone = (phoneElement) => {
    if (!isValidPhone(phoneElement.target.value)) {
      setPhoneError("Phone is invalid");
    } else {
      setPhoneError(null);
    }
  };

  const validate = () => {
    if (
      isValidEmail(emailElement.current.value) &&
      isValidPassword(passwordElement.current.value) &&
      isValidPhone(phoneElement.current.value) &&
      isValidPassword(confirmPasswordElement.current.value)
    ) {
      const createUser = async () => {
        await addDoc(usersCollectionRef, {
          loginId: Math.floor(Math.random() * 101) + 100,
          email: emailElement.current.value,
          password: confirmPasswordElement.current.value,
        });
      };

      createUser();

      navigate("/mainpage");
    }
  };

  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <img
        src={signupPageIcon}
        style={{ float: "left", height: "80%", width: "50%", marginTop: "5%" }}
      />
      <div
        style={{ float: "right", height: "80%", width: "40%", marginTop: "2%" }}
      >
        <div className="signup1">
          <img className="signup2" src={NameIcon} />
          &nbsp;&nbsp;&nbsp;
          <input className="signup3" type="text" placeholder="First Name" />
        </div>

        <div className="signup4">
          <img className="signup5" src={NameIcon} />
          &nbsp;&nbsp;&nbsp;
          <input className="signup6" type="text" placeholder="Last Name" />
        </div>
        <br />
        <br />
        <br />

        <div className="signup7">
          <img className="signup8" src={emailIcon} /> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="signup9"
            type="email"
            placeholder="Email Address"
            onBlur={handleChange}
            ref={emailElement}
          />
        </div>
        <br />
        {error && <span className="signup10">{error}</span>}
        <br />
        <br />

        <div className="signup11">
          <img className="signup12" src={phoneIcon} /> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="signup9"
            type="text"
            placeholder="Phone number"
            onBlur={handlePhone}
            ref={phoneElement}
          />
        </div>
        <br />
        {phoneerror && <span className="signup10">{phoneerror}</span>}
        <br />
        <br />

        <div className="signup1">
          <img className="signup5" src={paswordIcon} />
          &nbsp;&nbsp;&nbsp;
          <input
            className="signup6"
            type="password"
            placeholder="Password"
            onBlur={handlePassword}
            ref={passwordElement}
          />
        </div>

        <div className="signup4">
          <img className="signup5" src={paswordIcon} />
          &nbsp;&nbsp;&nbsp;
          <input
            className="signup3"
            type="password"
            placeholder="Confirm Password"
            onChange={handleConfirmPassword}
            ref={confirmPasswordElement}
          />
        </div>
        <br />
        {passwordError && <span className="signup10">{passwordError}</span>}
        {confirmPasswordError && (
          <span className="signup13">{confirmPasswordError}</span>
        )}
        <br />
        <br />

        <div>
          <button className="signup14" onClick={validate}>
            Create your account
          </button>
        </div>
        <br />
        <br />
        <br />
        <div>
          <hr style={{ width: "47%", float: "left", marginTop: "2.3%" }} />
          OR
          <hr style={{ width: "47%", float: "right", marginTop: "2.3%" }} />
        </div>
        <br />

        <div>
          <button className="signup15">Continue with Facebook</button>
        </div>
        <br />
        <br />
        <br />
        <div>
          <button className="signup16">Continue with Twitter</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
