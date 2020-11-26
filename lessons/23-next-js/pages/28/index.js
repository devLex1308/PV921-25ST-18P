import React, { useState, useEffect } from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
export default function app() {

   // Аналогично componentDidMount и componentDidUpdate:
  const [count, setCount] = useState(5000);
  const [count1, setCount1] = useState(5000);
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
    console.log("useEffect");
  },[0]);

  console.log("render");
  return (
    <>
      <h2>Урок 28</h2>
      <button onClick={() => setCount(count + 1)}>
      {count}
      </button>
      <button onClick={() => setCount1(count1 + 1)}>
      {count1}
      </button>
    </>
  );
}