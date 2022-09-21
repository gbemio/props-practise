import React from "react";

function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div>
      {props.setup && <h3> {props.setup} </h3>}
      {isShown && <p> {props.punchline} </p>}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
    </div>
  );
}

// const cond1 = false
// const cond2 = false
// if(cond1 && console.log("Hello there")) {
//     // this code will NOT run
// }

export default Jokes;
