import React from "react";
export default function Final() {
  const [cFT, newCFT] = React.useState([]);
  //const allFavThings = ["a", "b", "c", "d"];
  console.log(cFT);
  function addTest() {
    newCFT((cFT) => [...cFT, "Test"]);
  }
  let mapCFT = cFT.map((items) => <li>{items}</li>);

  return (
    <>
      <button onClick={addTest}>Add</button>
      <section>{mapCFT}</section>
    </>
  );
}
