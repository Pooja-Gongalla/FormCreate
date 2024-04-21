import { useState } from "react";
import Color from './Color.css';
function ColorChange()
{
    const [backColor,setbackColor]=useState('white');
      function handlered()
      {
        setbackColor('red');
      }
      function handlegreen()
      {
        setbackColor('green');
      }
     // Apply the background color to the body element
  document.body.style.backgroundColor = backColor;
    return(
       <div className="container" style={{textAlign:'center'}}>
        <button onClick={handlered} className="buttonr"> Red button</button>
        <button onClick={handlegreen} className="buttong">green button</button>
      </div>  
     )
}
export default ColorChange;