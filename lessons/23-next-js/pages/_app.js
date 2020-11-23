import "./24/example/styles.css";
import "./27/TicTacToe.css";
import Menu from "../components/menu.js"

function MyApp(page) {

  console.log(page);
  const { Component, pageProps } = page;

  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp