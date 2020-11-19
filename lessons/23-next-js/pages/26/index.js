import React from "react";
import AddToDo from "./components/AddToDo.js";
import ToDoList from "./components/ToDoList.js";

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
      showEditTodo: false,
    };

  }

  addToDoAction = (todo) => {
    const todos = [...this.state.todos, todo];

    this.setState({
      todos,
    });

    this.hideAddToDo();
  }

  hideAddToDo = () => {
    this.setState({
      showAddTodo: false,
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
        }}
        back={this.hideAddToDo}
        />
      );
    }

    return (
      <>
        <br/>
        <button onClick={this.handleClick}>
          Додати задачу
        </button>
        <ToDoList todos={this.state.todos}/>
      </>
    );
  }
}

