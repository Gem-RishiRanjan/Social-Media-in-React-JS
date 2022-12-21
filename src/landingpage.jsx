import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";
import React, { useState } from "react";

function Landingpage() {
  const [show, setShow] = useState(true);


  return (
    <div>
      <div style={{ float: "right", marginRight: "20%", marginTop: "3%" }}>
        {show ? (
          <button
            onClick={() => setShow(true)}
            style={{
              marginTop: "5px",
              fontSize: "25px",
              color: "#0b2fe6",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <b>Login</b>
          </button>
        ) : (
          <button
            onClick={() => setShow(true)}
            style={{
              marginTop: "5px",
              fontSize: "25px",
              color: "#8596ed",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <b>Login</b>
          </button>
        )}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {show ? (
          <button
            onClick={() => setShow(false)}
            style={{
              fontSize: "25px",
              color: "#8596ed",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <b>Signup</b>
          </button>
        ) : (
          <button
            onClick={() => setShow(false)}
            style={{
              fontSize: "25px",
              color: "#0b2fe6",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <b>Signup</b>
          </button>
        )}
      </div>
      {show ? <Login /> : <Signup />}
    </div>
  );
}
export default Landingpage;
