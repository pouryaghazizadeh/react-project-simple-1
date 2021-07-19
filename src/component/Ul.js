import styled from "styled-components";
import { NavLink } from "react-router-dom";
// style for ul header
const Ulstyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items:center;
  width:250px;
`;
const Li = styled.li`
text-decoration: none;

`
const Ul = () => {
  return (
    <>
      <Ulstyle>
        <Li>
          <NavLink to="/">Home</NavLink>
        </Li>
        < Li>
        <NavLink to="/About">about</NavLink>
        </Li>
        <Li>
        <NavLink to="Login">Login</NavLink>
        </Li>
      </Ulstyle>
    </>
  );
};

export default Ul;
