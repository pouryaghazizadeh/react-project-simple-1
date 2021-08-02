import Navbar from "./component/Navbar";

import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/About";
function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Aboute" component={Aboute} />
      </Switch>
    </>
  );
}

export default App;
