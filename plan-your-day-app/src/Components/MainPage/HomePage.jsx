import { useState, useEffect } from "react";
import Sidebar from "./HomePageUtils/Sidebar";
import Greetings from "./HomePageUtils/Greetings";
import HomePageSchedule from "./HomePageUtils/HomePageSchedule";

function HomePage() {
  return (
    <>
      <Sidebar />
      <Greetings />
      <HomePageSchedule />
    </>
  );
}

export default HomePage;
