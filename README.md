# TvMaze app 
### this app maked by react and css style and using api TvMaze.for start write this code

```bash
npm install 
```
for run app write this code
```bash
npm start
```
# component and App.js
## this app have 4 main part component that in the app.js

####   Home
####   About
####   Login
####  Navbar
###  app.js have tow callback function for get data from child
```bash
  # callback function for get data from searchbox.jsx component 
  const getData = (data) => {
    setUpdate(data);
  };
# with this useState in App.js (data) will update
  const [update, setUpdate] = useState()
```
```bash
#callback function for get data from Button.jsx component (DarkMood/lightMood) 
  const getMood = (clickMood) => {
    setMood(clickMood);
  };
# with this useState in App.js (clickMood) will update 
   const [mood, setMood] = useState(); 
```
#### and colors props to all component

### Home component
#### this component  have one image and Card.jsx component
#### Card.jsx component get props (update) from app.js
#### and also data from Data.json for make card
#### for filter data when client search someting
```bash
# function for filter data
  function FilterDataSearch() {
    if (p.length >= 1) {
      return Data.filter((i) => {
         i is index
        return (i = i.name && i.summary.match(p));
      });
    }
  }
```
#### and after that on function will maping

### About component
#### is a card about Tvmaze and have a button from bootstarp one logo TvMAze

### Login component

have  tow inpute and also one button submit


### page not found component
for when wrong searching will be show