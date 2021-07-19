import styled from "styled-components";
import SearchBox from "./SearchBox";
import Ul from "./Ul";
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
const Header = () => {
  return (
    <div>
      <Div>
        <H1>tvmaze</H1>
        <SearchBox />
        <Ul />
      </Div>
    </div>
  );
};

export default Header;
