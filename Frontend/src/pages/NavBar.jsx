import React, { useState } from "react";
import "./navbar.css";
import { Outlet, useNavigate } from "react-router-dom";
import Auth from "./Login";
import { useScrollTrigger } from "@mui/material";

function NavBar(props) {
  const navigate = useNavigate();
  const [islogin, setislogin] = useState(false);

  const handlelogin = async() => {
      setislogin(true);
     props.onlogin(true);
  }

  return (
    <>
   
      <div className="nav-out">
        <div className="nav-left">
          <h1 onClick={() => navigate("/")} className="website-name">MyWebsite</h1>
        </div>
        <div className="nav-right">
          <div onClick={handlelogin} className="login-link">
            Login
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default NavBar;
