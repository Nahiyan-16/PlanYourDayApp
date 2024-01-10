import { useState, useEffect } from "react";
import Greetings from "./HomePageUtils/Greetings";
import HomePageSchedule from "./HomePageUtils/HomePageSchedule";
import Navbar from "../Navbar/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Greetings />
      <HomePageSchedule />
    </div>
  );
}

export default HomePage;
