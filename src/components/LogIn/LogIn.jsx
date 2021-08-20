import React from "react";

import ButtonLogIn from "../buttonLogin/ButtonLogIn";
import "./LoginStyle.css";
const LogIn = ({ mood, DarkMood }) => {
  return (
    <div
      className="mother-logIn"
      style={mood ? DarkMood.bg.d2 : DarkMood.bg.d2}
    >
      <form
        className="container-box"
        style={mood ? DarkMood.bg.l : DarkMood.bg.d}
      >
        <h3
          className="title-login"
          style={mood ? DarkMood.c.d : { color: "#15cdfc" }}
        >
          Welcome back
        </h3>
        <div className="box">
          <h5 style={mood ? DarkMood.c.d : { color: "#15cdfc" }}>user name</h5>
          <input
            className="user-box"
            type="text"
            required=""
            placeholder="user name"
          />
        </div>
        <div className="box">
          <h5 style={mood ? DarkMood.c.d : { color: "#15cdfc" }}>password</h5>
          <input
            className="user-box"
            type="password"
            required=""
            placeholder="password"
          />
        </div>
        <ButtonLogIn />
      </form>
    </div>
  );
};

export default LogIn;
