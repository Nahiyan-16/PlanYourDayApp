import Greetings from "./HomePageUtils/Greetings";
import HomePageSchedule from "./HomePageUtils/HomePageSchedule";
import Navbar from "../Navbar/Navbar";
import { getScheduleService } from "../../Services/apiService";

function HomePage() {
  const isLoggedIn = async () => {
    const userObj = JSON.parse(localStorage.getItem("User Information"));
    const schedule = JSON.parse(sessionStorage.getItem("formData"));
    const loggedOn = userObj ? userObj.isLoggedOn : false;
    if (loggedOn && !schedule) {
      const schedule = await getScheduleService(userObj.email);
      sessionStorage.setItem("formData", JSON.stringify(schedule.schedule));
      window.location.reload();
    }
  };
  isLoggedIn();
  return (
    <div>
      <Navbar />
      <Greetings />
      <HomePageSchedule />
    </div>
  );
}

export default HomePage;
