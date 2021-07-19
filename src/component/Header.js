import styled from "styled-components";
// style for header website
const Div = styled.div`
  height: 100px;
  width: 100wh;
  background-color: blue;
  padding: 0px;
  margin: 0px;
`;

const Header = () => {
  return (
    <>
      <Div>
          <h1>tvmaze</h1>
      </Div>
    </>
  );
};

export default Header;
