import React from "react";
export default function Visible(props) {
  let [oclick, setoclick] = React.useState(props.on)
  function handleClick(){
    setoclick(oclick => !oclick)
  }
  return <button onClick={handleClick} style={{ backgroundColor: props.color }} className={oclick ? "on" : ""}></button>;
}
