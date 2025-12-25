import { createRoot } from "react-dom/client";
import Cats from "./app.jsx";
import "./index.css";
let root = createRoot(document.getElementById("root"));
root.render(<Cats />);
