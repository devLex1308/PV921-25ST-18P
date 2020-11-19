import React from "react";
import AddToDo from "./components/AddToDo.js"

const todo = {
  name: "string",
  desc: "string",
  isDone: "boolean",
  id: "number",
}


const db = [];


export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    // Эта привязка обязательна для работы `this` в колбэке.
    // this.handleClick = this.handleClick.bind(this);
  }


  render() {
    return (
      <>
        <AddToDo />
        <br/>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Включено' : 'Выключено'}
        </button>
      </>
    );
  }
}

