import React from "react";
import "../LogIn/Login.css";
const LogIn = () => {
  return (
      <div className = "container-logIn">
    <div className = "login-box">
      <form>
        <div>
            <input className = "user-box" type = "text" required = "" />
          <label>user name</label>
        </div>
        <div>
            <input className = "user-box" type = "password" required = "" />
          <label>password</label>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LogIn;
