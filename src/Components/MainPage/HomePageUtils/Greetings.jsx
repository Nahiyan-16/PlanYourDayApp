import React from "react";

const Greetings = () => {
  const userObj = JSON.parse(localStorage.getItem("User Information"));
  const name = userObj.username;
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
        {name}, Happy {days[day]}!
      </div>
    </>
  );
};

export default Greetings;
