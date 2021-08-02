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
  return (
    <div>
      <Input
        type="search"
        placeholder="Search"
        onChange={(e) => {
          let setInput = e.target.value
          console.log(setInput)
        }}
      />
    </div>
  );
};

export default SearchBox;
