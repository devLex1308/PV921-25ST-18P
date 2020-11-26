import React, { useState } from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
export default function app() {

  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Урок 28</h2>
      <button onClick={() => setCount(count + 1)}>
      {count}
      </button>
    </>
  );
}