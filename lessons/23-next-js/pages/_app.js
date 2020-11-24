import { Provider } from 'react-redux';

import "./24/example/styles.css";
import "./27/TicTacToe.css";
import Menu from "../components/menu.js";
import { store } from "../store/store.js";


function MyApp(page) {

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