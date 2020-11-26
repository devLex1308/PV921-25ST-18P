import React from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

export default class app extends React.Component {

  state = {
    count: 0,
  }

  constructor(props) {
    super(props);
    console.log("constructor", {props});
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps", {props, state});
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", {nextProps, nextState});
    return true;
  }

  componentDidMount(props) {
    console.log("componentDidMount", {props});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", {prevProps, prevState, snapshot});
  }

  render (props) {
    console.log("render", {props});
    return (
      <>
        <h2>Урок 28</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
        {this.state.count}
        </button>
      </>
    );
  }
}