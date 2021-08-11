import Navbar from "./component/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/about/About";
import { useState } from "react/cjs/react.development";


function App() {
  
  const getData = (data) => {
 setUpdate(  data)

    
  };
  const [update,setUpdate] = useState()

  
  return (
    <>    
        <Navbar getData={getData} />
        <Switch>
          {/* <Route path="/" exact  component={(props)=>{<Home props = {props}update = {update}/>}} />
           */}
           <Route>
             <Home update = {update}/>
           </Route>
          <Route path="/About" component={Aboute} />
        </Switch>
     
    </>
  );
}

export default App;
