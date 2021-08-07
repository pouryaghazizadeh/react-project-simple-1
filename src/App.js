import Navbar from "./component/navbar/Navbar";
// import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/about/About";
function App() {
  // const[value,setValue]=useState("")

  // const getData = (Id) => {
  //   setValue(Id);
    // console.log(value)
    // console.log(data);
  // };
 
  return (
    <>

      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route
          path="/"
          exact
          render={(props) => <Home  {...props}  getData={getData} />}
        /> */}
        <Route path="/" exact >
          <Home  />
        </Route>
        
        <Route path="/About" component={Aboute} />
      </Switch>
    </>
  );
}

export default App;
