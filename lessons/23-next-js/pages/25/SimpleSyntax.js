import React from "react";

export default class LoginControl extends React.Component {

  render() {
    const count = 4;
    return (
      <div>
        { count && <h1>Количество сообщений: {count}</h1> }
      </div>
    );
  }
}

