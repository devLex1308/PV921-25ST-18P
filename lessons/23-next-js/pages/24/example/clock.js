import React from "react";

/*
Можно использовать обычную функцию в качестве обработчика
function handlerClick() {
  alert("You clicked the button");
}
*/
export default class Clock extends React.Component {

  state = {
    clock: new Date().toLocaleTimeString(),
  }

  setIntervalId = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    this.setIntervalId = setInterval(this.updateTime, 1000);
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    if (this.setIntervalId) {
      clearInterval(this.setIntervalId);
    }
  }

  updateTime = () => {
    this.setState({
      clock: new Date().toLocaleTimeString(),
    });
    console.log(this.state.clock);
  }

  render() {
    console.log("render");
     // Стрелочная функция в качестве обработчика
    return (
      <div>
        <h2>{this.state.clock}</h2>
      </div>
    )


  }
}
