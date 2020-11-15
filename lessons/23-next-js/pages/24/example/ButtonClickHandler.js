import React from "react";

/*
Можно использовать обычную функцию в качестве обработчика
function handlerClick() {
  alert("You clicked the button");
}
*/
export default function App() {
  // Стрелочная функция в качестве обработчика
  const handlerClick = () => alert("Hello from arrow function!");

  return <button onClick={handlerClick}>Click me!</button>;
}
