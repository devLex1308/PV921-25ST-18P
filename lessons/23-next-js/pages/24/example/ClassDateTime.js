import React from "react";

class CurrentDate extends React.Component {
  render() {
    return <h2>{new Date().toLocaleDateString()}</h2>;
  }
}

class CurrentTime extends React.Component {
  render() {
    return <h2>{new Date().toLocaleTimeString()}</h2>;
  }
}
export default class ClassDateTime extends React.Component {
  render() {
    return (
      <div className="App">
        <CurrentDate />
        <CurrentTime />
      </div>
    );
  }
}