import React from "react";

/*
Можно использовать обычную функцию в качестве обработчика
function handlerClick() {
  alert("You clicked the button");
}
*/
export default class App extends React.Component {

  state = {
    count: 0,
    name: "Bogdan",
  }

  handlerClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  render() {
     // Стрелочная функция в качестве обработчика

    console.log(this);

    return <button onClick={this.handlerClick}>{this.state.count}</button>;
  }
}
