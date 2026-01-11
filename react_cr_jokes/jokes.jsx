import React from "react";
export default function Final(props) {
  let [Show, setShow] = React.useState(false);
  function hide() {
    setShow((Show) => !Show);
  }
  return (
    <>
      <h3>Setup : {props.setup}</h3>
      {Show === true && <p>Punchline: {props.punchline}</p>}
      <button onClick={hide}>Show Punchline</button>
    </>
  );
}
