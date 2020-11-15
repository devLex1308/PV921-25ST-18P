import React from "react";

export default function App() {
  /*
  Получаем текущее время
  Мы будем его использовать, как значение внутри h2
  Для вставки значения, которое должно быть динамически заполнено
  используются {}
  */
  let currentTime = new Date().toLocaleTimeString();
  return (
    <div className="App">
      <h1>Current time is</h1>
      <h2>{currentTime}</h2>
    </div>
  );
}
