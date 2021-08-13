import "./buttonDarkMood.css";
import { useState } from "react";
const Button = ({ getMood }) => {
  const [clickMood, setClickMood] = useState(false);
  getMood(clickMood);
 
  return (
    <div >
      <div className = "body-toggel">
        <button
          className={clickMood?"button-toggel2": "button-toggel"}
          onClick={(e) => {
            setClickMood(!clickMood);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Button;
