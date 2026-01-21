import React from "react";
import Header from "./headernew.jsx";
import Body from "./bodynew.jsx";

export default function App() {
  let [cuser, setcuser] = React.useState("John");
  return (
    <>
      <Header userValue={cuser}/>
      <Body userValue={cuser} />
    </>
  );
}
