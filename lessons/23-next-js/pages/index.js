import Header from "../components/header.js";
import { Footer, PI } from "../components/footer.js";


function HomePage() {
  console.log(PI);
  return (
    <div>
      <Header name="Vasia" age="15" />
      <div>Welcome to Next.js!</div>
      <div>Welcome to Next.js!</div>
      <Footer />
    </div>);
}

export default HomePage;