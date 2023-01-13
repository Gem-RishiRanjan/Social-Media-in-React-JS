import "./App.css";
import Landingpage from "./landingpage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Mainpage() {
  
  const navigate = useNavigate();

  const logg = localStorage.getItem("islogin");
  const userLoggedIn = localStorage.getItem("userLoggedIn");

  useEffect(() => {
    if (logg == 1) {
      console.log(logg);
      navigate(`/homepage/${userLoggedIn}`);
    }
  });

  if (logg == 0) {
    return <Landingpage />;
  }

  return <></>;
}
export default Mainpage;
