import React from "react";
//import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  console.log(onChangeColor)
  return (
  <div 
  className="child" 
  onclick = {onChangeColor}
  style={{ backgroundColor: "#FFF" }} 
  />
  )
}

export default Child;
