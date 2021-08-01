import styled from "styled-components";
import Data from "../db/data.json";
const Card = () => {
  return (
    <CARD>
      {Data.map((data)=> {
        return (
          <DIVCARD>
            <H2>
              {data.name}
              {`S${data.season}E${data.number}`}
            </H2>
            {/* <IMG src={data.original} alt = {data.name}/> */}
            {/* <img src={data.original} alt = {data.name}/> */}
          </DIVCARD>
        );
      })}
    </CARD>
  );
};
// CARD tag thats means a div with all cards
const CARD = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
`;

// this tag is a  div card that have img title and...
const DIVCARD = styled.div`
  width: 310px;
  height: 500px;
  background-color: blue;
  margin: 4px;
  display: flex;
  justify-content: center;
  
`;
// H2 is a h2 for title card
const H2 = styled.h2`
  color: white;
  margin: 9px;
  font-size: 20px;
`;
// IMG is a tag img
const IMG = styled.img`
width: 290px;
height: 200px;
margin: 9px;
`
export default Card;
