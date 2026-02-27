import { createRoot } from "react-dom/client";
import Body from "./body";
import Header from "./header";
//import Ingredient from "./ingredientsmain";
import "./meme.css";
let root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Body />
  </>,
);
