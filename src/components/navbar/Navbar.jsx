import { useState,useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ButtonMood from "../Button DarkMood/ButtonMood";
import "./navbarStyle.css";

//
//

const Navbar = ({ getData, getMood, mood, DarkMood }) => {
  const [Id, setId] = useState(false); //this is for berger and mobile screen
  const [data, setData] = useState("");//this is for value search box
useEffect(() => {
  getData(data)}
 )

  

  return (
    <div className="div-compo" id={Id ? "div-compo2" : ""}>
      <nav
        className="mother-nav"
        id={Id ? "mother-nav2" : ""}
        style={mood ? DarkMood.bg.l : DarkMood.bg.d}
      >
        <div className="div-titel" id={Id ? "div-titel2" : ""}>
          <h1 className="name-web" style = {mood?DarkMood.c.d:DarkMood.c.l}>TvMaze</h1>
          <ButtonMood getMood={getMood} />
        </div>

        <input
          style={mood ? DarkMood.search.light : DarkMood.search.dark}
          type="search"
          value={data}
          placeholder="Search"
          className="search-box"
          id={Id ? "search-box2" : ""}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <FaBars
          style={mood ? DarkMood.c.d : DarkMood.c.l}
          className="Bars"
          onClick={() => {
            setId(!Id);
          }}
        />

        <div
          className="nave-menu"
          id={Id ? "nave-menu2" : ""}
          style={mood ? DarkMood.bg.l : DarkMood.bg.d}
        >
          <NavLink
            style={mood ? DarkMood.c.d : DarkMood.c.l}
            exact
            to="/"
            className="NavLink"
            activeStyle={{ color: "#538eff", border: "solid #15cdfc" }}
          >
            Home
          </NavLink>
          <NavLink
            style={mood ? DarkMood.c.d : DarkMood.c.l}
            exact
            to="/About"
            className="NavLink"
            activeStyle={{ color: "#538eff", border: "solid #15cdfc" }}
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/Login"
            activeStyle={{ color: "#538eff" }}
            className="Log-in"
            style={mood ? DarkMood.c.d : DarkMood.c.l}
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
