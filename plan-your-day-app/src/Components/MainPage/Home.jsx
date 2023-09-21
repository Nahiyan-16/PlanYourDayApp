import Login from "../LoginPage/LoginPage";
import HomePage from "./HomePage";

function Home() {
  const signedIn =
    localStorage.getItem("isLoggedOn") === "false" ? false : true;

  return <div>{signedIn ? <HomePage /> : <Login />}</div>;
}

export default Home;
