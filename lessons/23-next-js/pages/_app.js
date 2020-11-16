import "./24/example/styles.css";
import Menu from "../components/menu.js"


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp