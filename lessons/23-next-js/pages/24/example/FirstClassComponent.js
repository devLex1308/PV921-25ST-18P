import React from "react";

/*
Классовые компоненты это классы.
Они обязаны наследоваться от React.Componet
Внутри класса должен быть реализован метод render
Он обязан возвращать UI нашего компонента
*/
export default class App extends React.Component {
  /*
  Обязательный метод render
  Он должен быть реализован в любом классовом компоненте
  */
  render() {
    return (
      <div className="App">
        <h1>The way to get started is to quit talking and begin doing</h1>
        <h2>Walt Disney</h2>
      </div>
    );
  }
}