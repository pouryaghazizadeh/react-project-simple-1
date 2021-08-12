import React from "react";
 import ButtonLogIn from "../component/buttonLogin/ButtonLogIn";
import "../LogIn/Login.css";
const LogIn = ({ mood, DarkMood }) => {
  return (

    <div className="mother-logIn" style = {mood?DarkMood.bg.d2:DarkMood.bg.d2}>
      <form className="container-box" style = {mood?DarkMood.bg.l:DarkMood.bg.d}>
        <titel className="title-login" style = {mood?DarkMood.c.d:{ color: "#15cdfc"}}>Welcome back</titel>
        <div className="box">
          <titel  claccName = "label-login"  style = {mood?DarkMood.c.d:{ color: "#15cdfc"}}>user name</titel>
          <input className="user-box" type="text" required="" placeholder ="user name" />
        </div>
        <div className="box">
          <titel claccName = "label-login" style = {mood?DarkMood.c.d:{ color: "#15cdfc"}}>password</titel>
          <input className="user-box" type="password" required="" placeholder ="password" />
        </div>
        <ButtonLogIn mood={mood} DarkMood={DarkMood}/>
      </form>
    </div>

    // <div
    //   className="mother-logIn"
    //   style={mood ? DarkMood.bg.d2 : DarkMood.bg.d2}
    // >
    //   <form
    //     className="container-box"
    //     style={mood ? DarkMood.bg.l : DarkMood.bg.d}
    //   >
    //     <title
    //       className="title-login"
    //       style={mood ? DarkMood.c.d : { color: "#15cdfc" }}
    //     >
    //       Welcome back
    //     </title>
    //     <div className="box">
    //       <label
    //         claccName="label-login"
    //         style={mood ? DarkMood.c.d : { color: "#15cdfc" }}
    //       >
    //         user name
    //       </label>

    //       <input
    //         className="user-box"
    //         type="text"
    //         required=""
    //         placeholder="user name"
    //       />
    //     </div>
    //     <div className="box">
    //       <label
    //         claccName="label-login"
    //         style={mood ? DarkMood.c.d : { color: "#15cdfc" }}
    //       >
    //         password
    //       </label>
    //       <input
    //         className="user-box"
    //         type="password"
    //         required=""
    //         placeholder="password"
    //       />
    //     </div>
    //     <ButtonLogIn mood={mood} DarkMood={DarkMood} />
    //   </form>
    // </div>
  );
};

export default LogIn;
