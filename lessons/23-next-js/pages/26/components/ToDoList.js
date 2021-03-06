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
            <li
              key={todo.id}
              onClick={() => {
                if (todo.id == this.state.activeToDoId) {
                  this.setState({activeToDoId: null});
                } else {
                  this.setState({activeToDoId: todo.id});
                }
              }}
            >
              {todo.name}
              {
                this.state.activeToDoId == todo.id ? (
                  <>
                    <p>{todo.desc}</p>
                    <button onClick={() =>this.props.delete(todo.id)}>
                      X
                    </button>
                    <button onClick={() =>this.props.edit(todo.id)}>
                      редагувати
                    </button>
                  </>
                ) : null
              }
            </li>
          ))
        }
      </ul>
    )
  }
}