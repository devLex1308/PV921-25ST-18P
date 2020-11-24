import React from "react";
import { connect } from 'react-redux';
import { editTodo } from "../../../actions/todo.actions.js";

class EditToDo extends React.Component {
  constructor(props) {
    super(props);

    const {id, todos} = props;

    const todo = todos.filter(item => item.id == id)[0];

    this.state = {
      name: todo.name,
      desc: todo.desc
    };
  }

  checkInputText = (str) => {
    const rx = /^[А-Яа-яёЁЇїІіЄєҐґA-Za-z0-9 ]{2,250}$/;
    return rx.test(str);
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const {
      name, desc
    } = this.state;


    if (!this.checkInputText(name)) {
      alert("Ви не ввели назву задачі");
      return;
    }

    if (!this.checkInputText(desc)) {
      alert("Ви не ввели опис задачі");
      return;
    }

    const editedTodo = {
      name,
      desc,
      isDone: false,
      id: this.props.id,
    };

    this.props.editTodo(editedTodo);

    this.props.onFinish();
    this.setState({
      name: '',
      desc: '',
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Редагування</h2>
        <label>
          Назва задачі: <br/>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Опис задачі:<br/>
          <textarea
            value={this.state.desc}
            name="desc"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <button onClick={this.handleClick}>
          Зберегти
        </button>
        <button onClick={this.props.back}>
          Назад
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = {
  editTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditToDo);
