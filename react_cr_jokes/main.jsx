import Data from "./data.jsx";
import Final from "./jokes.jsx"
export default function Main(props) {
  let dataElem = Data.map((jokes) => {
    return (<Final setup= {jokes.setup} punchline={jokes.punchline}/>);
  });
  return <>{dataElem}</>;
}
