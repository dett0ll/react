import React from "react";
import Paddata from "./pads";
import Visible from "./padscolor";
export default function Pads() {
  let [cAV, setCAV] = React.useState(Paddata);
  let cAVElem = cAV.map((elem) => (
    <Visible key={elem.id} color={elem.color} on={elem.on} />
  ));
  return (
    <main>
      <div className="pad-container">{cAVElem}</div>
    </main>
  );
}
