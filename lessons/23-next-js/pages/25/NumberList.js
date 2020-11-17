import React from "react";
import LogoutButton from "../../components/LogoutButton.js";
import LoginButton from "../../components/LoginButton.js";
import Greeting from "../../components/Greeting.js";

const numbers = [1, 2, 3, 4, 5];

function NumberList(props) {
  const numbers = props.numbers;
  // const listItems = ;
  return (
    <ul>
      {
        numbers.map((number, i) =>
          (<li key={i}>{number}</li>)
        )
      }
    </ul>
  );
}

export default function App() {
  return  <NumberList numbers={numbers} />;
}

