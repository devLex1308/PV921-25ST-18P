import React from "react";

export default class EditToDo extends React.Component {
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
    const rx = /^[А-Яа-яёЁЇїІіЄєҐґ ]{2,40}$/;
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

    // this.props.onFinish({
    //   name,
    //   desc,
    //   isDone: false,
    //   id: Date.now()
    // });
    // this.setState({
    //   name: '',
    //   desc: '',
    // });
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
          Створити
        </button>
        <button onClick={this.props.back}>
          Назад
        </button>
      </React.Fragment>
    );
  }
}

