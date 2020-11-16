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

  constructor(props) {
    super(props);
    // setInterval(this.updateTime, 1000);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
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
