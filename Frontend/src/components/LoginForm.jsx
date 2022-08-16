import React, { useState } from "react";
import "./Loginform.scss";
import img from "../img/avatar.png";
import { FaEye, FaUser,FaGoogle,FaTelegram, FaFacebook } from "react-icons/fa";
function LoginForm({ open }) {
  const [showpassword, setshowpassword] = useState("text");
  const showpasswordhandler = () => {
    if (showpassword === "text") {
      setshowpassword("password");
    }
    else setshowpassword("text")
  };
  return (
    <div
      className="loginform"
      style={open ? { width: "635px" } : { width: "635px", height: "0px" }}
    >
      <div className="left">
          <div className="welcome">
<h2>Welcome</h2>
<h3>akiCommerse Market</h3>          </div>
          <div className="discription">
              <p>Buy and Sell Anything</p>
              <div className="socilicons">
<FaGoogle/><FaTelegram/> <FaFacebook/>
              </div>
          </div>
      </div>
      <div className="right">
        <div className="avatar">
          <img src={img} alt="" />
        </div>
        <div className="form">
          <div className="username">
            <FaUser className="loginformicons" />
            <input type="text" name="" id="" placeholder="UserName" />
          </div>
          <div className="password">
            <FaEye className="loginformicons" onClick={showpasswordhandler}/>
            <input type={showpassword} name="" id="" placeholder="Password" />
          </div>
          <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <p>please check if you are website admin</p>
          </div>
          <div className="loginbtn">
              <h4>Login</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
