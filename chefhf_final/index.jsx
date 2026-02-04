import { createRoot } from "react-dom/client";
import Body from "./body";
import Header from "./ingredientheader";
//import Ingredient from "./ingredientsmain";
import "./chef.css";
let root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    
    <Body />
  </>,
);
