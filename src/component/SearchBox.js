import styled from "styled-components";
const Input = styled.input`
width: 200px;
height: 30px;
/* margin: 20px; */
border-radius:4px;
border:none;
outline: none;

`
const SearchBox = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search"
   
        
      />
    </div>
  );
};
export default SearchBox;
