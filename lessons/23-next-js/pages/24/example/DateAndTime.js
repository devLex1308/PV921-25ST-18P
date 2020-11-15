import React from "react";
// import "./styles.css";

/*
Компонент для отображения текущей даты
*/
function CurrentDate() {
  return <h2>{new Date().toLocaleDateString()}</h2>;
}

/*
Компонент для отображения текущего времени
*/
function CurrentTime() {
  return <h2>{new Date().toLocaleTimeString()}</h2>;
}

/*
компонент приложения, собирающий вместе дату и время
*/

export default function App() {
  return (
    <div className="App">
      <CurrentDate />
      <CurrentTime />
    </div>
  );
}
/*
Классический код с использованием фрагментов
export default function App() {
  return (
    <React.Fragment>
      <CurrentDate />
      <CurrentTime />
    </React.Fragment>
  );
}

Cокращенная форма использования фрагментов
export default function App() {
  return (
    <>
      <CurrentDate />
      <CurrentTime />
    </>
  );
}
*/