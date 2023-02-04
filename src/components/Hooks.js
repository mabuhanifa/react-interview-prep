import React, { useState } from "react";

export default function Hooks() {
  const [state, setState] = useState({
    name: "hooks",
    type: "react.setState",
  });
  return (
    <div>
      <h1>Hooks</h1>
      <div>
        <h2>{state.name}</h2>
        <button
          onClick={() => setState({ name: "useState", type: "react.setState" })}
        >
          Change
        </button>
      </div>
    </div>
  );
}
