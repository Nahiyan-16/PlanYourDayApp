import Login from "../LoginPage/LoginPage";
import HomePage from "./HomePage";

function Home() {
  const userObj = JSON.parse(localStorage.getItem("User Information"));
  const signedIn = userObj
    ? userObj.isLoggedOn === "false"
      ? false
      : true
    : false;

  return <div>{signedIn ? <HomePage /> : <Login />}</div>;
}

export default Home;
