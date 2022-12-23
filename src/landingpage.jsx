import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";
import React, { useState } from "react";

function Landingpage() {
  const [show, setShow] = useState(true);


  return (
    <div>
      <div className="land0">
        {show ? (
          <button className="land1"
            onClick={() => setShow(true)}
          >
            <b>Login</b>
          </button>
        ) : (
          <button className="land2"
            onClick={() => setShow(true)}
          >
            <b>Login</b>
          </button>
        )}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {show ? (
          <button className="land3"
            onClick={() => setShow(false)}
          >
            <b>Signup</b>
          </button>
        ) : (
          <button className="land4"
            onClick={() => setShow(false)}
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
