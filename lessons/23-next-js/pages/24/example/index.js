import React from "react";
// import "./styles.css";

export default function App(props) {
  /*
  деструктурируем объект props
  */
  let { name, lastName } = props;
  return (
    <div className="App">
      <h1>Information about writer:</h1>
      <h2>{name}</h2>
      <h2>{lastName}</h2>
    </div>
  );

  /*  
Альтернативная форма деструктуризации
  let { name: n, lastName: l } = props;
  return (
    <div className="App">
      <h1>Information about writer:</h1>
      <h2>{n}</h2>
      <h2>{l}</h2>
    </div>
  );
  */
}