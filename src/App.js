import React from "react";
import Jokes from "./Jokes.jsx";
import JokesData from "./JokesData.jsx";

function App() {
  const jokeElements = JokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}

export default App;
