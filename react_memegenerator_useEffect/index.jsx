import { createRoot } from "react-dom/client";
import Body from "./body";
import Header from "./header";
//import Ingredient from "./ingredientsmain";
//import App from './app.jsx'
import "./meme.css";
import Window from "./window";
let root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Body />
  </>,
);
