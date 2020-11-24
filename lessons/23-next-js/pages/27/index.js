import React from "react";
import AddToDo from "./components/AddToDo.js";
import EditToDo from "./components/EditToDo.js";
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
      editTodoId: null,
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

  editToDoAction = (todo) => {
    const todos = this.state.todos.reduce((acc, item) => {
      if (item.id == todo.id) {
        acc.push(todo);
      } else {
        acc.push(item);
      }

      return acc;
    }, []);

    this.setState({
      todos,
    });

    this.hideEditToDo();
  }

  hideAddToDo = () => {
    this.setState({
      showAddTodo: false,
    });
  }

  hideEditToDo = () => {
    this.setState({
      editTodoId: null,
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

  editClick = (id) => {
    this.setState({
      editTodoId: id,
    });
  }

  render() {
    console.log(this.state);

    if (this.state.editTodoId) {
      return <EditToDo
        id={this.state.editTodoId}
        todos={this.state.todos}
        onFinish={(todo) => {
          // console.log({todo});
          this.editToDoAction(todo);
        }}
        back={this.hideEditToDo}
      />
    }

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
          delete={this.deleteClick}
          edit={this.editClick}
        />
      </>
    );
  }
}

