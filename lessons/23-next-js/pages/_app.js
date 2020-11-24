import { Provider } from 'react-redux'
import { createStore } from 'redux'

import "./24/example/styles.css";
import "./27/TicTacToe.css";
import Menu from "../components/menu.js"


function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])


function MyApp(page) {

  console.log(page);
  const { Component, pageProps } = page;

  return (
    <Provider store={store}>
      <div>
        <Menu />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp