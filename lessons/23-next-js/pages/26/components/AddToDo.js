import React from "react";

export default class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: ''
    };
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
    this.props.onFinish({
      name,
      desc,
      isDone: false,
      id: Date.now()
    });
    this.setState({
      name: '',
      desc: '',
    });
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

