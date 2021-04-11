import React, { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false)
  const color = isOn ? "red" : "white";

  function HandleClick () {
       setIsOn(!isOn)
  }



  return <button style={{background : color}}onClick={HandleClick}>{isOn ? "On":"Off"}</button>;
}

export default Toggle;
