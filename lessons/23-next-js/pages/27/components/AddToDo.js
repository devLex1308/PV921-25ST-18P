import React, { useState } from "react";

export default function AddToDo(props) {

  const [name, setName ] = useState("");
  const [desc, setDesc ] = useState("");

  return (
    <React.Fragment>
      <label>
        Назва задачі: <br/>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            const {value} = event.target;
            setName(value);
          }}
        />
      </label>
      <br/>
      <label>
        Опис задачі:<br/>
        <textarea
          value={desc}
          name="desc"
          onChange={(event) => {
            const {value} = event.target;
            setDesc(value);
          }}
        />
      </label>
      <br/>
      <button onClick={() => {

        props.onFinish({
          name,
          desc,
          isDone: false,
          id: Date.now()
        });
        setName("");
        setDesc("");
      }}>
        Створити
      </button>
      <button onClick={props.back}>
        Назад
      </button>
    </React.Fragment>
  );
}

class AddToDo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: ''
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
        <button onClick={this.props.back}>
          Назад
        </button>
      </React.Fragment>
    );
  }
}

