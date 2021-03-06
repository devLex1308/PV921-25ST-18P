import React from "react";
import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from "../../../actions/todo.actions.js";


class ToDoList extends React.Component{
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
              <input 
                      type="checkbox" 
                      checked={todo.isDone}
                      onChange={() => this.props.dispatch(toggleTodo(todo.id))}/>
              {
                this.state.activeToDoId == todo.id ? (
                  <>
                    <p>{todo.desc}</p>
                    <button onClick={() =>this.props.dispatch(deleteTodo(todo.id))}>
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


const mapStateToProps = (state /*, ownProps*/) => {
  // console.log({state});
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(ToDoList);