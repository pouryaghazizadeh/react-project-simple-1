import Navbar from "./component/navbar/Navbar";

import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/About";
function App() {


  const getData = (data) => {
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route
          path="/"
          exact
          render={(props) => <Home {...props}  getData={getData} />}
        />
        <Route path="/Aboute" component={Aboute} />
      </Switch>
    </>
  );
}

export default App;
