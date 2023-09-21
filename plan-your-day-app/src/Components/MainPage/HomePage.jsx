import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

function HomePage() {
  return (
    <div className="flex justify-start items-start">
      <Sidebar />
      <div>BODY</div>
    </div>
  );
}

export default HomePage;
