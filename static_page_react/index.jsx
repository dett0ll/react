import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header.jsx"; //because this is export default, we can name it anything
import Main from "./main.jsx";
import Footer from "./footer.jsx";
const root = createRoot(document.getElementById("root"));
root.render(<First />);
function First() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
