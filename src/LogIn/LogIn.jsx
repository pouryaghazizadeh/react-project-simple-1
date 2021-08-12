import React from "react";
import ButtonLogIn from "../component/buttonLogin/ButtonLogIn";
import "../LogIn/Login.css";
const LogIn = () => {
  return (
    <div className="mother-logIn">
      <form className="container-box">
        <titel className="titel-login">Welcome back</titel>
        <div className="box">
          <label>user name</label>
          <input className="user-box" type="text" required="" />
        </div>
        <div className="box">
          <label>password</label>
          <input className="user-box" type="password" required="" />
        </div>
        <ButtonLogIn/>
      </form>
    </div>
  );
};

export default LogIn;
