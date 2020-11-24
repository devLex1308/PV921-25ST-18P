import React, { useState } from "react";
import { connect } from 'react-redux'

function ToDoList(props){
  const [activeToDoId, setActiveToDoId] = useState(null);
  const { todos } = props;

  return(
      <ul>
        {
          todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => {
                if (todo.id == activeToDoId) {
                  setActiveToDoId(null);
                } else {
                  setActiveToDoId(todo.id);
                }
              }}
            >
              {todo.name}
              {
                activeToDoId == todo.id ? (
                  <>
                    <p>{todo.desc}</p>
                    <button onClick={() =>props.delete(todo.id)}>
                      X
                    </button>
                    <button onClick={() =>props.edit(todo.id)}>
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
};


const mapStateToProps = (state /*, ownProps*/) => {
  // console.log({state});
  return {
    todos: state.todos,
    name: "Ivan"
  }
}

export default connect(mapStateToProps)(ToDoList);