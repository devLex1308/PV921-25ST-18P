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

  }

  addToDoAction = (todo) => {
    const todos = [...this.state.todos, todo];

    this.setState({
      todos,
    });
  }


  render() {
    return (
      <>
        <AddToDo onFinish={(todo) => {
          console.log({todo});
          // this.addToDoAction(todo);
        }} />
        <br/>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Включено' : 'Выключено'}
        </button>
      </>
    );
  }
}

