import React from "react";
// import "./styles.css";

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна'
};

function getGreeting(user) {
  if (user) {
    return <h1>Здравствуй, {formatName(user)}!</h1>;
  }
  return(
    <div>
    <script>
      alert("Нас взломали!");
      console.log("8");
    </script>
  <h1>Здравствуй</h1>
  </div>);
}


// const element = (
//   <h1>
//     Здравствуй, {formatName(user)}!
//   </h1>
// );

const element = (
  <h1>
    {getGreeting()}
  </h1>
);


export default function App(props) {
  return element;
}