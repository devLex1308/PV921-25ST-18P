import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      text: "",
      select: "coconut",
      selectMulti: ["coconut"],
      isGoing: true,
    };

  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleChangeText = (event) => {
    this.setState({text: event.target.value});
  }

  handleChangeSelect = (event) => {
    this.setState({select: event.target.value});
  }

  handleChangeSelectMulti = (event) => {
    const { value } = event.target;
    let selectMulti = [];
    if (this.state.selectMulti.includes(value)) {
      selectMulti = this.state.selectMulti.filter(item => item!=value);
    } else {
      selectMulti = [...this.state.selectMulti, value];
    }

    console.log({selectMulti});
    this.setState({selectMulti});
  }

  handleInputChangeCheckBox = (event) => {
    const target = event.target;
    const value = target.checked

    this.setState({
      isGoing: value
    });
  }

  handleSubmit = (event) => {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    // console.log("1");

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя: <br/>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Сочинение:<br/>
          <textarea value={this.state.text} onChange={this.handleChangeText} />
        </label>
        <br/>
        <label>
          Выберите ваш любимый вкус: <br/>
          <select  value={this.state.select} onChange={this.handleChangeSelect}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          Выберите ваш любимый вкус: <br/>
          <select multiple={true} value={this.state.selectMulti} onChange={this.handleChangeSelectMulti}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          Пойдут:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChangeCheckBox} />
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}