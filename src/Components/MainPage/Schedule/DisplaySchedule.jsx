import React from "react";

const DisplaySchedule = ({ schedule }) => {
  console.log(schedule);
  return (
    <div className="border min-h-[60vh] mx-10 mt-5 min-w-[60%] p-5">
      <div className="text-2xl">Recent Added Schedules:</div>
      <div className="border min-h-[50vh]">{schedule.eventDate}</div>
    </div>
  );
};

export default DisplaySchedule;
