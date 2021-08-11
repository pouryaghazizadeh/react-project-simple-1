import "./buttonDarkMood.css"
import { useState } from "react"
const Button = ({getMood}) => {
    const[clickMood,setClickMood] = useState(false)
    getMood(clickMood)
    return (
        <div>
            <button className ="mood" onClick = {
                (e)=>{
                    setClickMood(!clickMood)
                }
            }>click</button>
            
        </div>
    )
}

export default Button
