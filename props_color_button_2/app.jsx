import React from "react";
import Paddata from "./pads";
import Visible from "./padscolor";
export default function Pads() {
  let [cAV, setCAV] = React.useState(Paddata);
  function toggle(id) {
    console.log(id);
    setCAV((cAV) =>
      cAV.map((elem) => (elem.id === id ? { ...elem, on:!elem.on } : elem)),
    );
  }
  let cAVElem = cAV.map((elem) => (
    <Visible
      toggle={toggle}
      id={elem.id}
      key={elem.id}
      color={elem.color}
      on={elem.on}
      name = {elem.name}
    />
  ));
  return (
    <main>
      <div className="pad-container">{cAVElem}</div>
    </main>
  );
}
