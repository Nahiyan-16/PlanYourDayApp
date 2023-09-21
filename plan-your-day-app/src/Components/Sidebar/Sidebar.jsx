import { useState, useEffect } from "react";

export default function Sidebar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const sidebar = (
    <div className="bg-charcoal h-screen w-[15%] text-center p-[10px]">
      <h1 className="text-2xl text-aliceblue">Plan Your Day!</h1>
    </div>
  );

  const handleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const buttonClass = `w-[5%] p-[10px] text-5xl fixed ${
    sidebarToggle ? "text-aliceblue" : ""
  }`;

  return (
    <>
      {sidebarToggle && sidebar}
      <button className={buttonClass} onClick={handleClick}>
        ≡
      </button>
    </>
  );
}
