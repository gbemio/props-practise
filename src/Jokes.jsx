import React from "react";

function Jokes(props) {
  return (
    <div>
      <p className="setup">Setup: {props.setup}</p>
      <p className="punchline">Punchline: {props.punchline}</p>
    </div>
  );
}

export default Jokes;
