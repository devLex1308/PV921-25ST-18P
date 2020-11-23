import React from "react";
import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])

let currentValue
function handleChange() {
  // let previousValue = currentValue
  // currentValue = select(store.getState());
  console.log({state: store.getState()})

  // if (previousValue !== currentValue) {
  //   console.log(
  //     'Some deep nested property changed from',
  //     previousValue,
  //     'to',
  //     currentValue
  //   )
  // }
}

const unsubscribe = store.subscribe(handleChange)


store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs1'
})

store.dispatch({
  type: 'ADD_TODO5',
  text: 'Read the docs2'
})

store.dispatch({
  type: 'ADD_TODO6',
  text: 'Read the docs3'
})

store.dispatch({
  type: 'ADD_TODO7',
  text: 'Read the docs4'
})


console.log(store);
console.log(store.getState());

export default class Redux extends React.Component{
  render() {
    return(<h1>Redux</h1>);
  }
}