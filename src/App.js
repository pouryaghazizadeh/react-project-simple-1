import Navbar from "./component/navbar/Navbar";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/About";
function App() {
  const[value,setValue]=useState("")

  const getData = (Id) => {
    setValue(Id);
    // console.log(value)
    // console.log(data);
  };
 
  return (
    <>

      <Navbar getData ={getData}/>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route
          path="/"
          exact
          render={(props) => <Home  {...props}  getData={getData} />}
        /> */}
        <Route path="/" exact >
          <Home  value={value}/>
        </Route>
        
        <Route path="/Aboute" component={Aboute} />
      </Switch>
    </>
  );
}

export default App;
