import { useState } from "react";
import { Link } from "react-router-dom";
import Column from "./Column";
import { convertToStandardTime } from "../../Utils/DateAndTimeFormatter";

const HomePageSchedule = () => {
  const [clickedEvent, setClickedEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(null);

  let scheduleAry = JSON.parse(sessionStorage.getItem("formData"));
  let morningSchedule = [];
  let eveningSchedule = [];
  let nightSchedule = [];
  let hasPlansForToday;

  const checkForTodaySchedule = (events) => {
    const hasEventForToday = events.some((event) => {
      const eventDate = event.eventDate.split("T")[0];
      const tzoffset = new Date().getTimezoneOffset() * 60000;
      const localDate = new Date(Date.now() - tzoffset)
        .toISOString()
        .slice(0, -1)
        .split("T")[0];

      if (eventDate === localDate) {
        scheduleAry = events.filter((event) => {
          return event.eventDate.split("T")[0] === localDate;
        });
        return true;
      }
    });

    return hasEventForToday;
  };

  function sortEventsByTime(events) {
    return events.sort((a, b) => {
      const timeA = a.eventTime.split(":").map(Number);
      const timeB = b.eventTime.split(":").map(Number);

      if (timeA[0] !== timeB[0]) {
        return timeA[0] - timeB[0];
      }

      return timeA[1] - timeB[1];
    });
  }

  const splitSchedule = () => {
    morningSchedule = scheduleAry.filter((event) => {
      const hour = event.eventTime.split(":")[0];
      return hour >= 0 && hour < 12;
    });
    eveningSchedule = scheduleAry.filter((event) => {
      const hour = event.eventTime.split(":")[0];
      return hour >= 12 && hour < 18;
    });
    nightSchedule = scheduleAry.filter((event) => {
      const hour = event.eventTime.split(":")[0];
      return hour >= 18 && hour < 24;
    });
    sortEventsByTime(morningSchedule);
    sortEventsByTime(eveningSchedule);
    sortEventsByTime(nightSchedule);
  };

  if (scheduleAry.length === 0) {
    hasPlansForToday = false;
  } else if (checkForTodaySchedule(scheduleAry)) {
    hasPlansForToday = true;
    splitSchedule();
  }

  const handleClick = (event) => {
    setClickedEvent(true);
    setShowEvent(event);
  };

  const handleClose = () => {
    setClickedEvent(null);
    setShowEvent(null);
  };

  return (
    <div className="border-2 border-black rounded-lg shadow-2xl min-h-[30vh] m-20 flex flex-col justify-center items-center text-xl text-center p-5">
      {hasPlansForToday ? (
        <>
          {clickedEvent ? (
            <div
              className="bg-charcoal absolute top-[30%] left-[42%] z-50 text-aliceblue w-[300px] h-[40vh] flex flex-col rounded-2xl"
              style={{ boxShadow: "0 0 50px #111111" }}
            >
              <button className="self-end m-2" onClick={handleClose}>
                ❌
              </button>
              {showEvent.eventTitle} @{" "}
              {convertToStandardTime(showEvent.eventTime)}
              <div className="bg-aliceblue text-charcoal h-[60%] mt-2 p-1 mx-5">
                {showEvent.eventBody}
              </div>
            </div>
          ) : (
            <></>
          )}
          <h2 className="mb-5">Here's what you have planned for today</h2>
          <div className="w-[100%] min-h-[20vh] flex">
            <Column
              title="Morning 🍳"
              scheduleAry={morningSchedule}
              onItemClick={(event) => handleClick(event)}
            />
            <Column
              title="Evening 🌞"
              scheduleAry={eveningSchedule}
              onItemClick={(event) => handleClick(event)}
            />
            <Column
              title="Night 🌙"
              scheduleAry={nightSchedule}
              onItemClick={(event) => handleClick(event)}
            />
          </div>
          <Link
            to="/schedule"
            className="bg-charcoal text-aliceblue py-3 px-4 rounded-2xl hover:shadow-2xl hover:scale-[1.03] transition duration-150 mt-5"
          >
            Plan More! ✏️
          </Link>
        </>
      ) : (
        <>
          <div className="mb-6">
            Looks like you have nothing scheduled for today 🙈
          </div>
          <Link
            to="/schedule"
            className="bg-charcoal text-aliceblue py-3 px-4 rounded-2xl hover:shadow-2xl hover:scale-[1.03] transition duration-150"
          >
            Start Planning ✏️
          </Link>
        </>
      )}
    </div>
  );
};

export default HomePageSchedule;
