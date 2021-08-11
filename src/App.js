import Navbar from "./component/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/about/About";
import { useState } from "react/cjs/react.development";
import  PageNotFound  from "./component/pageNotFound/PageNotFound";

function App() {
  //this object meked for chang mood color to dark and light
  const DarkMood = {
    lightMood:{
      background: "#efefef",
      color: "#1e1f25"
    },
    darkMood:{
      background:"#1e1f25",
      color:  "#efefef"  
    }
  }
  //this function meked for get value from search box
  const getData = (data) => {
    setUpdate(data);
  };
  const getMood = (clickMood)=>{
    setMood(clickMood)

  }
  const [update, setUpdate] = useState();//this is for value search box
const[mood,setMood] = useState()
console.log(mood);
  return (
    <>
    <h4 style = {mood?DarkMood.lightMood:DarkMood.darkMood}>kkkkkkkkk</h4>

      <Navbar getData={getData} getMood={getMood} />
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
