import Login from "../LoginPage/LoginPage";
import HomePage from "./HomePage";

function Home() {
  const isLoggedIn = localStorage.getItem("isLoggedOn");
  const signedIn = isLoggedIn ? (isLoggedIn === "false" ? false : true) : false;

  return <div>{signedIn ? <HomePage /> : <Login />}</div>;
}

export default Home;
