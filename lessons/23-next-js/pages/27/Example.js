import React, { useState } from 'react';

export default function Example() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <div>
      <p>Ви клікнули {count} {sum} раз</p>
      <button onClick={() => {
        setCount(count + 1);
        setSum(sum + 1);
      }}>
        Натисни на мене +
      </button>
      <button onClick={() => {
        setCount(count + 1);
        setSum(sum - 1);
      }}>
        Натисни на мене -
      </button>
    </div>
  );
}