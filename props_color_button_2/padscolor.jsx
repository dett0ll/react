import React from "react";
export default function Visible(props) {
  return (
    <button
      onClick={() => props.toggle(props.id)}
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : ""}
    ></button>
  );
}

// onClick = {props.toggle(props.id)} -> it will run toggle function without clicking
