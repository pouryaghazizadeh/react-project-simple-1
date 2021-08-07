// import SearchBox from "../SearchBox";
// import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../navbar/navbar.css";
import { useState } from "react";

//
//
const Navbar = () => {
  const [Id, setId] = useState(false);
  const [data, setData] = useState("");

  return (
    <div id={Id ? "div-compo" : ""}>
      <nav className="mother-nav" id={Id ? "mother-nav2" : ""}>
        <h1 className="name-web" id={Id ? "name-web2" : ""}>
          TvMaze
        </h1>
        <input
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
          className="Bars"
          onClick={() => {
            setId(!Id);
          }}
        />

        <div className="nave-menu" id={Id ? "nave-menu2" : ""}>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeStyle={{ color: "#15cdfc" }}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/About"
            className="NavLink"
            activeStyle={{ color: "#15cdfc" }}
          >
            About
          </NavLink>
          <NavLink exact to="/Login" className="Log-in">
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
