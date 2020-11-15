import React from "react";

class Quote extends React.Component {
  render() {
    /*
    Для доступа к props внутри класса мы должны использовать
    this 
    */
    return (
      <>
        <h2>{this.props.text}</h2>
        <h2>{this.props.author}</h2>
      </>
    );
  }
}

export default function App() {
  const qText = "Stay hungry, stay foolish";
  const qAuthor = "Steve Jobs";
  return (
    <div className="App">
      <Quote text={qText} author={qAuthor} />
    </div>
  );
}