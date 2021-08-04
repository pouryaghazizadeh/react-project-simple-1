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
  return (
    <div  id={Id ? "div-compo" : ""}>
      <nav className="mother-nav" id={Id ? "mother-nav2" : ""}>
        <h1 className="name-web" id={Id? "name-web2":""}>TvMaze</h1>
        <input
          type="search"
          placeholder="Search"
          className="search-box"
          id={Id?"search-box2":""}
          onChange={(e) => {}}
        />
        <FaBars
          className="Bars"
          onClick={() => {
            setId(!Id);
          }}
        />

        <div className="nave-menu" id={Id ? "nave-menu2":""}>
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
    // <>
    //   <Div>
    //     <div style={HSstyle}>
    //       <H1>TvMaze</H1>

    //       <SearchBox  />
    //     </div>
    //     <Ulstyle>
    //       <Li>
    //
    //
    //       </Li>
    //       <Li>
    //         <NavLink
    //           to="/Aboute"
    //           style={NnLink}
    //           activeStyle={{ color: "white" }}
    //         >

    //           about
    //         </NavLink>
    //       </Li>
    //       <Li>
    //         <NavLink to="Login" style={NnLink} activeStyle={{ color: "white" }}>
    //           Login
    //         </NavLink>
    //       </Li>
    //     </Ulstyle>
    //   </Div>
    // </>
  );
};
// style div that have h1 and searchbox
// const HSstyle = { width: "50vw", display: "flex", alignItems: "baseline" };

// Nav link style
// const NnLink = {
//   textDecoration: "none",
//   margin: "17px",
// };

// // style for ul header
// const Ulstyle = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   justify-content: space-around;
//   align-items: center;
//   width: 30vw;
// `;
// const Li = styled.li`
//   text-decoration: none;
// `;

// // style for header website
// const Div = styled.div`
//   height: 100px;
//   width: 100vw;
//   padding: 0px;
//   margin: 0px;
//   display: flex;
//   justify-content: space-between;
//   background-color: blue;
//   align-items: center;
//   align-content: space-between;
//   flex-wrap: wrap;
// `;
// const H1 = styled.h1`
//   padding: 10px;
//   margin: 0px;
//   display: flex;
//   align-self: flex-start;
// `;
export default Navbar;
