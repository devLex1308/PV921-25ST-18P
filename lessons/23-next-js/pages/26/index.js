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
      showAddTodo: false,
    };

  }

  addToDoAction = (todo) => {
    const todos = [...this.state.todos, todo];

    this.setState({
      todos,
    });
  }

  handleClick = () => {
    this.setState({
      showAddTodo: true,
    });
  }


  render() {
    console.log(this.state);

    if (this.state.showAddTodo) {
      return (
        <AddToDo onFinish={(todo) => {
          // console.log({todo});
          this.addToDoAction(todo);
        }} />
      );
    }

    return (
      <>
        <br/>
        <button onClick={this.handleClick}>
          Додати задачу
        </button>
      </>
    );
  }
}

