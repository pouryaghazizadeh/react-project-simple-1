import Navbar from "./component/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/about/About";
import { useState } from "react/cjs/react.development";
import PageNotFound from "./component/pageNotFound/PageNotFound";
import LogIn from "./LogIn/LogIn";

function App() {
  //this function meked for get value from search box
  const getData = (data) => {
    setUpdate(data);
  };
  //this function meked for get mood from Button.jsx
  const getMood = (clickMood) => {
    setMood(clickMood);
  };
  const [update, setUpdate] = useState(); //this is for update value search box
  const [mood, setMood] = useState(); //this is for update value mood that is light or dark
  return (
    <>
      <Navbar
        getData={getData}
        getMood={getMood}
        mood={mood}
        DarkMood={DarkMood}
      />
      <Switch>
        <Route path="/" exact>
          <Home update={update} mood={mood} DarkMood={DarkMood} />
        </Route>
        <Route path="/logIn">
          <LogIn />
        </Route>

        <Route path="/About" component={Aboute} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
//this object meked for chang mood color to dark and light
const DarkMood = {
  lightMood: {
    background: "#efefef",
    color: "#1e1f25",
  },
  darkMood: {
    background: "#1e1f25",
    color: "#efefef",
  },
  bg: {
    l: { background: "#efefef" },
    d: { background: "#1e1f25" },
  },
  c: {
    l: { color: "#efefef" },
    d: { color: "#1e1f25" },
  },

  search: {
    light: {
      borderColor: "#1e1f25 ",
    },
    dark: {
      borderColor: "#efefef",
    },
  },
};
