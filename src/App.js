import Navbar from "./component/navbar/Navbar";

import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/about/About";

function App() {

  return (
    <>
      <Navbar />

      

      
      
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/About" component={Aboute} />
      </Switch>

    </>
  );
}

export default App;
