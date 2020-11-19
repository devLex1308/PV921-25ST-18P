import React from "react";
db = [];


export default class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
    };

  }


  render() {
    return (
      <label>
        Назва задачі: <br/>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
      <br/>
      <label>
        Опис задачі:<br/>
        <textarea value={this.state.text} onChange={this.handleChangeText} />
      </label>
      <button onClick={this.handleClick}>
        Створити
      </button>
    );
  }
}

