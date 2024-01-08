import { useEffect, useState } from "react";
import {
  formatDate,
  convertToStandardTime,
} from "../../Utils/DateAndTimeFormatter";

const DisplaySchedule = ({ schedule }) => {
  const [allFormData, setAllFormData] = useState([]);
  const storedVal = sessionStorage.getItem("formData");
  const formAry = storedVal ? JSON.parse(storedVal).splice(-10) : [];

  useEffect(() => {
    setAllFormData(formAry.reverse());
  }, [schedule]);

  return (
    <div className="border min-h-[70vh] mx-10 mt-5 min-w-[60%] p-5">
      <div className="text-2xl">Recent Added Schedules:</div>
      <div className="border min-h-[60vh]">
        <table className="w-[100%]">
          <thead>
            <tr>
              <th className="w-[33%]">Title</th>
              <th className="w-[33%]">Date</th>
              <th className="w-[33%]">Time</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allFormData.map((item, index) => (
              <tr key={index}>
                <td>{item.eventTitle}</td>
                <td>{formatDate(item.eventDate)}</td>
                <td>{convertToStandardTime(item.eventTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySchedule;
