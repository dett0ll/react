import Width from "./width";
import react from "react";
export default function Window() {
  let [show, setshow] = react.useState(true);
  function toggle() {
    setshow((show) => !show);
  }
  console.log(show);
  return (
    <>
      <button onClick={toggle}>Toggle Window Tracker</button>
      {show && <Width/>}
    </>
  );
}
