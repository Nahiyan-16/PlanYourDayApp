import { useState, useEffect } from "react";
import Sidebar from "./HomePageUtils/Sidebar";
import Greetings from "./HomePageUtils/Greetings";
import HomePageSchedule from "./HomePageUtils/HomePageSchedule";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <Greetings />
      <HomePageSchedule />
    </div>
  );
}

export default HomePage;
