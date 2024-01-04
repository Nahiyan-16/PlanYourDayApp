import { useState, useEffect } from "react";
import Sidebar from "./HomePageUtils/Sidebar";
import Greetings from "./HomePageUtils/Greetings";

function HomePage() {
  return (
    <>
      <Sidebar />
      <Greetings />
    </>
  );
}

export default HomePage;
