import React from "react";

const Greetings = () => {
  const name = localStorage.getItem("Username");
  const d = new Date();
  const day = d.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <div className="text-5xl flex justify-center items-center">
        Happy {days[day]}, {name}!
      </div>
    </>
  );
};

export default Greetings;
