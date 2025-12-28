import { createRoot } from "react-dom/client";
import Final from "./app.jsx";
import Head from "./header.jsx";
import "./index.css";
let root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Head />
    <Final />
  </>
);
