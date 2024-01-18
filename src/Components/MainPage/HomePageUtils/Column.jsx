import { useState } from "react";
import { convertToStandardTime } from "../../Utils/DateAndTimeFormatter";

const Column = ({ title, scheduleAry, onItemClick }) => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const handleMouseEnter = (event) => {
    setHoveredEvent(event);
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  return (
    <div className="border w-[33%] relative">
      <h2 className="font-bold">{title}</h2>
      {scheduleAry.map((event, index) => (
        <div
          key={index}
          className="flex justify-center items-center relative"
          onMouseEnter={() => handleMouseEnter(event)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onItemClick(event)}
        >
          <h1 className="underline mr-2">
            {convertToStandardTime(event.eventTime)}
          </h1>
          <h2>{event.eventTitle}</h2>
          {hoveredEvent === event && event.eventBody && (
            <div
              className="absolute bg-white border p-2 shadow-md top-full left-100 z-50 text-sm"
              style={{ zIndex: 50 }}
            >
              {event.eventBody}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Column;
