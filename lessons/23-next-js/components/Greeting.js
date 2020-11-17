import UserGreeting from "./UserGreeting.js";
import GuestGreeting from "./GuestGreeting.js";

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}