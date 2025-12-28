import JokesData from "./data.jsx";
import Jokes from "./jokes.jsx";
export default function Final() {
  const jokesElem = JokesData.map((jokes) => {
    return <Jokes setup={jokes.setup} punchline={jokes.punchline} />;
  });
  return <>{jokesElem}</>;
}
//index parses app
//app parses Jokes which has props for setup and punchline
//prop looks for value of setup and puncline
// it looks that for in jokes.setup which is part in JokesData

/*return (<>
  <JokesData 
  setup ='This is setup 1'
  punchline = 'This is punchline 1'/>
  <JokesData 
  setup ='This is setup 2'
  punchline = 'This is punchline 2'/>
  <JokesData 
  setup ='This is setup 2'
  punchline = 'This is punchline 2'/>
  </>); */
