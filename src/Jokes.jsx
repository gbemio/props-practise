import React from "react";

function Jokes(props) {
  return (
    <div>
      <p className="setup">{props.setup}</p>
      <p className="punchline">{props.punchline}</p>
    </div>
  );
}

export default Jokes;
