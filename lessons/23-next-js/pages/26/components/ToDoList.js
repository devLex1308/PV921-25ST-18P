import React from "react";

export default class ToDoList extends React.Component{
  state = {
    activeToDoId: null,
  }

  render() {
    const { todos } = this.props;
    return(
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              {todo.name}
              {
                this.state.activeToDoId == todo.id ? (
                  виводимо опис
                ) : null
              }
            </li>
          ))
        }
      </ul>
    )
  }
}