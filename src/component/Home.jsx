import Card from "./Card";
import { useState } from "react";
const Home = ({value}) => {
  const [data,setData] = useState("")
  setData(value)
  return (
    // style={{"padding-top":"70px"}}
     <div >
      <Card data = {data}/>
      
     </div> 
  );
};

export default Home;
