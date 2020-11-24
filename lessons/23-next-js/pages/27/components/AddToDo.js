import React, { useState } from "react";
import Title from "./Title.js";

export default function AddToDo(props) {

  const [name, setName ] = useState("");
  const [desc, setDesc ] = useState("");

  const checkInputText = (str) => {
    const rx = /^[А-Яа-яёЁЇїІіЄєҐґA-Za-z0-9 ]{2,10000}$/;
    return rx.test(str);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    switch(name) {
      case "name":
          setName(value);
        break;
      case "desc":
          setDesc(value);
        break;
      // default;
    }
  }

  const handleClick = () => {
    if(!checkInputText(name))
    {
      alert("Ви не ввели опис задачі");
      console.log(name);
      return;
    }
    if (!checkInputText(desc))
    {
      alert("Ви не ввели назву задачі");
      console.log(desc);
      return;
    }
    props.onFinish({
      name,
      desc,
      isDone: false,
      id: Date.now()
    });
    setName("");
    setDesc("");
  }


  return (
    <React.Fragment>
      <Title animal="dog" />
      <label>
        Назва задачі: <br/>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Опис задачі:<br/>
        <textarea
          value={desc}
          name="desc"
          onChange={handleChange}
        />
      </label>
      <br/>
      <button onClick={handleClick}>
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
    const rx = /^[А-Яа-яёЁЇїІіЄєҐґA-Za-z0-9 ]{2,}$/;
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

