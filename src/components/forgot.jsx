import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div class="forgot">
      <span>
        <i>
          <Link class="forgotspan" to="/resetpassword">
            Forgot password?
          </Link>
        </i>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <Link class="signupspan" to="/signup">
          Signup
        </Link>
      </span>
    </div>
  );
}

export default Forgot;

