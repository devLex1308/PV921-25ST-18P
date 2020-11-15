import React from "react";
// import "./styles.css";


// https://ru.reactjs.org/docs/getting-started.html
// https://ru.reactjs.org/tutorial/tutorial.html

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