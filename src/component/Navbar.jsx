import SearchBox from "./SearchBox";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  
  const proop = (r)=>{  
    return(r)
  }

  return (
    <>
      <Div>
        <div style={HSstyle}>
          <H1>TvMaze</H1>
        
         
          
          

          
          <SearchBox proop = {proop}/>
        </div>
        <Ulstyle>
          <Li>
            <NavLink
              exact
              to="/"
              style={NnLink}
              activeStyle={{ color: "white" }}
            >
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/Aboute"
              style={NnLink}
              activeStyle={{ color: "white" }}
            >
              about
            </NavLink>
          </Li>
          <Li>
            <NavLink to="Login" style={NnLink} activeStyle={{ color: "white" }}>
              Login
            </NavLink>
          </Li>
        </Ulstyle>
      </Div>
    </>
  );
};
// style div that have h1 and searchbox
const HSstyle = { width: "50vw", display: "flex", alignItems: "baseline" };
// Nav link style
const NnLink = {
  textDecoration: "none",
  margin: "17px",
};

// style for ul header
const Ulstyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: 30vw;
`;
const Li = styled.li`
  text-decoration: none;
`;

// style for header website
const Div = styled.div`
  height: 100px;
  width: 100vw;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  background-color: blue;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
`;
const H1 = styled.h1`
  padding: 10px;
  margin: 0px;
  display: flex;
  align-self: flex-start;
`;
export default Navbar;
