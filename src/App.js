import SearchBox from "./component/SearchBox";
import styled from "styled-components";
import { Switch, Route,NavLink} from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/Aboute";
function App() {
  return (
   
    <Div>
    <H1>TvMaze</H1>
     <SearchBox/>
     <Ulstyle>
        <Li>
          <NavLink to="/">Home</NavLink>
        </Li>
        <Li>
          <NavLink to="/About">about</NavLink>
        </Li>
        <Li>
          <NavLink to="Login">Login</NavLink>
        </Li>
      </Ulstyle>
      

     
      <Switch>
      <Route path="/Home" exact><Home/></Route>
      <Route path ="/Aboute" ><Aboute/></Route>
      <Route></Route>
      <Route></Route>
      </Switch>
    </Div>

   
 

   
  );
}

// style for ul header
const Ulstyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: 250px;
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
  /* justify-content: flex-end; */
  background-color: blue;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
`;
const H1 = styled.h1`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-self: flex-start;
  
`;

export default App;
