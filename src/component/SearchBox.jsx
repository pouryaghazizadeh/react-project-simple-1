import styled from "styled-components";

import { useState } from "react";

const Input = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 4px;
  border: none;
  outline: none;
  margin: 20px;
`;

const SearchBox = ({ proop}) => {
  let [input, setinput] = useState("");
  return (
    <div>
      <Input
        type="search"
        value={input}
        placeholder="Search"
        onChange={(e) => {
           setinput(e.target.value)
          proop(input);
        }}
      />
    </div>
  );
};

export default SearchBox;
