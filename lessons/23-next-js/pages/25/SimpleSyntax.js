import React from "react";

export default class LoginControl extends React.Component {

  render() {
    const count = 0;
    return (
      <div>
        { count && <h1>Количество сообщений: {count}</h1>}
      </div>
    );
  }
}

