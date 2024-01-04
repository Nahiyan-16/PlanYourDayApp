import { useState, useEffect } from "react";

export default function Sidebar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const sidebar = (
    <div className="bg-charcoal h-screen w-[15%] text-center p-[10px]">
      <h1 className="text-2xl text-aliceblue underline">Plan Your Day!</h1>
    </div>
  );

  const handleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const buttonClass = `w-[3%] p-[5px] text-5xl fixed ${
    sidebarToggle ? "text-aliceblue" : ""
  }`;

  return (
    <div className="flex justify-start items-start h-[50px]">
      {sidebarToggle && sidebar}
      <button className={buttonClass} onClick={handleClick}>
        ≡
      </button>
    </div>
  );
}
