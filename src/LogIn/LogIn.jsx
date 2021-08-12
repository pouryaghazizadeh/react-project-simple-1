import React from "react";
import ButtonLogIn from "../component/buttonLogin/ButtonLogIn";
import "../LogIn/Login.css";
const LogIn = ({mood,DarkMood}) => {
  return (
    <div className="mother-logIn" style = {mood?DarkMood.bg.d:DarkMood.bg.l}>
      <form className="container-box" >
        <titel className="titel-login" style = {mood?DarkMood.c.l:DarkMood.c.d }>Welcome back</titel>
        <div className="box">
          <label  style = {mood?DarkMood.c.l:DarkMood.c.d }>user name</label>
          <input className="user-box" type="text" required="" />
        </div>
        <div className="box">
          <label  style = {mood?DarkMood.c.l:DarkMood.c.d }>password</label>
          <input className="user-box" type="password" required="" placeholder ="password" />
        </div>
        <ButtonLogIn/>
      </form>
    </div>
  );
};

export default LogIn;
