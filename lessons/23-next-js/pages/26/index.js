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
    let state = null;
    if (typeof window !== "undefined") {
      const stateString = localStorage.getItem('todoData');
      if (stateString) {
        state = JSON.parse(stateString);
      }
    }
    this.state = state
      ? state
      : {
      todos: [],
      showAddTodo: false,
      showEditTodo: false,
    };
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      localStorage.setItem('todoData', JSON.stringify(this.state));
    }
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

  deleteClick = (id) => {
    // console.log({id});
    this.setState({
      todos: this.state.todos.filter(todo => todo.id!=id)
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
        <ToDoList
          todos={this.state.todos}
          delete={this.deleteClick}
        />
      </>
    );
  }
}

