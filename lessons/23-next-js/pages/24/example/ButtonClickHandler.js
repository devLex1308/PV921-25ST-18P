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

  constructor(props) {
    super(props);

    this.handlerClickPlus = this.handlerClickPlus.bind(this);
    this.handlerClickMinus = this.handlerClickMinus.bind(this);
    this.handlerClickReset = this.handlerClickReset.bind(this);
  }

  handlerClickPlus() {

    console.log(this);
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  handlerClickMinus() {
    const { count } = this.state;
    if (count - 1 >= 0) {
      this.setState({
        count: count - 1,
      });
    }
  };

  handlerClickReset() {
    this.setState({
      count: 0,
    });
  };

  render() {
     // Стрелочная функция в качестве обработчика
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => {
          console.log(this);
          const { count } = this.state;
          this.setState({
            count: count + 1,
          });
        }}>+</button>
        <button onClick={this.handlerClickMinus}>-</button>
        <button onClick={this.handlerClickReset}>reset</button>
      </div>
    )


  }
}
