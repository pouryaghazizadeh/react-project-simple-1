import Data from "../db/data.json";
import styled from "styled-components";
import { useState } from "react";
import { data } from "jquery";
const Input = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 4px;
  border: none;
  outline: none;
  margin: 20px;
`;

const SearchBox = () => {
  const[input,setInput]=useState("")
if(input.length>0){
  data.filter((i)=>{
    
  })
}
  return (
    <div>
      <Input type="search" placeholder="Search" onChange={(e) => {
        setInput = e.target.value



      }} value={input}/>
    </div>
  );
};




const Card = () => {
  return (
    <CARD>
      {Data.map((data,index) => {
        return (
          <DIVCARD id={data.id}>
            <H2>
              {data.name}
              {`S${data.season}E${data.number}`}
            </H2>
            <IMG src={data.image.original} alt = {data.name}/>
            {/* <img src={data.original} alt = {data.name}/> */}
            <P> {data.summary.split("</p>").join("").replace("<p>", "")}</P>

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
  padding: 6px;
  background-color: blue;
  margin: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
// P is a p tag for write summary
const P = styled.p`
  color: white;
  display: flex;
  flex-wrap: wrap;
`;


export{Card, SearchBox}

