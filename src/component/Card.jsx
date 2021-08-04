// import styled from "styled-components";
import Data from "../db/data.json";
import "../component/card.css"
// import { useState } from "react";
const Card = ({value}) => {
  // const[Value,setValue]=useState("")
  // setValue(value)
  // if(Value.length>=0){
  //   data = data.filter((i)=>{
  //     return i.name.mach(Value)
  //   })
  
  return (
    <div className="container-card">
    
 
      {Data.map((data, index) => {
        return (
          <div key={index} className="div-cards">
            <h2 className = "title">
              {data.name}
              {`S${data.season}E${data.number}`}
            </h2>
            <img src={data.image.original} alt={data.name}  className = "img-card"/>
            <p className = "Description-card"> {data.summary.split("</p>").join("").replace("<p>", "")}</p>
          </div>
        );
      })}
    </div>
  );
    };
// CARD tag thats means a div with all cards
// const CARD = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   justify-content: space-around;
// `;

// this tag is a  div card that have img title and...
// const DIVCARD = styled.div`
//   width: 310px;
//   height: 500px;
//   padding: 6px;
//   background-color:#000;
//   margin: 4px;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// `;
// H2 is a h2 for title card
// const H2 = styled.h2`
//   color: white;
//   margin: 9px;
//   font-size: 20px;
// `;
// IMG is a tag img
// const IMG = styled.img`
//   width: 290px;
//   height: 200px;
//   margin: 9px;
// `;
// P is a p tag for write summary
// const P = styled.p`
//   color: white;
//   display: flex;
//   flex-wrap: wrap;
// `;

export default Card;
