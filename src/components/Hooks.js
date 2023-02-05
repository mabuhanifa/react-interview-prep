import React, { useEffect, useState } from "react";

export default function Hooks() {
  const [state, setState] = useState({
    name: "hooks",
    type: "react.setState",
  });
  useEffect(()=>{

  },[])
  return (
    <div>
      <h1>Hooks</h1>
      <h2>useState</h2>
      <div>
        <h2>{state.name}</h2>
        <button
          onClick={() => setState({ name: "useState", type: "react.setState" })}
        >
          Change
        </button>
      </div>
      <h2>useEffect</h2>
      <div>

      </div>
    </div>
  );
}
