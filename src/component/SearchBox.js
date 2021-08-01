// import { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 4px;
  border: none;
  outline: none;
  margin: 20px;
`;
const SearchBox = () => {
  // const Card = document.getElementById()
  // const [input,setInput] = useState("Div-card");
  // if (input.length>0){
  //   Card =Card.filter((i)=>{
  //     return(
  //       i.name
  //     )
  //   })
  // }
  return (
    <div>
      <Input
        type="search"
        placeholder="Search"
        onChange={(e) => {
          console.log(e.target.value)
          
        }}
        // value={input}
      />
    </div>
  );
};
export default SearchBox;
