import React from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

export default class app extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor", {props});
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps", {props, state});
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", {props, state});
  }

  componentDidMount(props) {
    console.log("componentDidMount", {props});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidMount", {prevProps, prevState, snapshot});
  }

  render (props) {
    console.log("constructor", {props});
    return (
      <h2>Урок 28</h2>
    );
  }
}