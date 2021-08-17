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

### Home
#### this component  have one image and Card.jsx component
#### Card.jsx component 
