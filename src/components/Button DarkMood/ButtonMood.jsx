import { useEffect, useState } from "react";
import "./buttonMoodStyle.css";

const Button = ({ getMood }) => {
  const [clickMood, setClickMood] = useState(false);

  useEffect(() => {
    getMood(clickMood);
  });

  return (
    <div>
      <div className="body-toggel">
        <button
          className={clickMood ? "button-toggel2" : "button-toggel"}
          //button have tow class Because for transform 
          onClick={(e) => {
            setClickMood(!clickMood);
          }}
        >
        </button>
      </div>
    </div>
  );
};

export default Button;
