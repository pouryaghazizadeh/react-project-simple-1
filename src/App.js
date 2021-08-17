import { Route, Switch } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Aboute from "./components/about/About";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/navbar/Navbar";
import PageNotFound from "./components/pageNotFound/PageNotFound";

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

        <Route path="/About">
          <Aboute mood={mood} DarkMood={DarkMood} />
        </Route>

        <Route path="/logIn">
          <LogIn mood={mood} DarkMood={DarkMood} />
        </Route>

        <Route>
          <PageNotFound mood={mood} DarkMood={DarkMood} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
//this object meked for chang mood color to dark and light
//this is an object that have tree object one for background and other one for color andstyle for search box
// this color (#090d11)is darker than (#1e1f25)

const DarkMood = {
  bg: {
    l: { background: "#efefef" },
    d: { background: "#090d11" },
    d2: { background: "#1e1f25" },
  },
  c: {
    l: { color: "#efefef" },
    d: { color: "#090d11" },
    d2: { color: "#1e1f25" },
  },

  search: {
    light: {
      borderColor: "#090d11",
    },
    dark: {
      borderColor: "#efefef",
    },
  },
};
