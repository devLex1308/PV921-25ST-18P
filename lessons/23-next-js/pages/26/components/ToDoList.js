import React from "react";

export default class ToDoList extends React.Component{
  render() {
    const { todos } = this.props;
    return(
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.name}</li>
          ))
        }
      </ul>
    )
  }
}