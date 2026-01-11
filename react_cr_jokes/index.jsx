import { createRoot } from "react-dom/client";
import Main from './main.jsx'
import Final from './jokes.jsx'
let root = createRoot(document.getElementById('root'))
root.render(<>< Main/><Final /></>)
