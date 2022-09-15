import React from "react";

function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div>
      <p className="setup">Setup: {props.setup}</p>
      <p className="punchline">Punchline: {props.punchline}</p>
      <button onClick={toggleShown}>Show Punchline</button>
    </div>
  );
}

// const cond1 = false
// const cond2 = false
// if(cond1 && console.log("Hello there")) {
//     // this code will NOT run
// }

export default Jokes;
