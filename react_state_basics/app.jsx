import React from "react";
export default function Final() {
  const [result, setResult] = React.useState(0);
  function plusClick() {
    setResult((preresult) => preresult + 1);
  }
  function minusClick() {
    setResult((preresult) => preresult - 1);
  }
  return (
    <>
      <h1>{result}</h1>
      <button onClick={plusClick}>+</button>
      <button onClick={minusClick}>-</button>
    </>
  );
}
