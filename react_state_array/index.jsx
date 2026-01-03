import { createRoot } from "react-dom/client";
//import Head from "./header.jsx";
//import Main from "./main.jsx";
import App from "./app.jsx";
import "./index.css";
let root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
