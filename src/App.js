import Navbar from "./component/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/about/About";
import { useState } from "react/cjs/react.development";
import  PageNotFound  from "./component/pageNotFound/PageNotFound";

function App() {
  const getData = (data) => {
    setUpdate(data);
  };
  const [update, setUpdate] = useState();

  return (
    <>

      <Navbar getData={getData} />
      <Switch>
        <Route path ="/" exact>
          <Home  update={update} />
        </Route>
        
        
        <Route path="/About" component={Aboute} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
