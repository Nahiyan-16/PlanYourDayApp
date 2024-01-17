import { useEffect, useState } from "react";
import {
  formatDate,
  convertToStandardTime,
} from "../Utils/DateAndTimeFormatter";

const DisplaySchedule = ({ schedule }) => {
  const [allFormData, setAllFormData] = useState([]);
  const storedVal = sessionStorage.getItem("formData");
  const formAry = storedVal ? JSON.parse(storedVal).splice(-15) : [];

  useEffect(() => {
    setAllFormData(formAry.reverse());
  }, [schedule]);

  return (
    <div className="border-2 min-h-[70vh] mx-10 mt-5 min-w-[60%] p-5 bg-[white] text-charcoal rounded-xl">
      <div className="text-2xl mb-5 text-center">Recent Added Events</div>
      <div className="min-h-[60vh] flex items-start justify-center px-10 pt-3">
        <table className="w-[90%] rounded-2xl">
          <thead className="">
            <tr>
              <th className="w-[33%]">Title</th>
              <th className="w-[33%]">Date</th>
              <th className="w-[33%]">Time</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allFormData.map((item, index) => (
              <tr key={index}>
                <td className="pb-2">{item.eventTitle}</td>
                <td>{formatDate(item.eventDate.split("T")[0])}</td>
                <td>{convertToStandardTime(item.eventTime)}</td>
                <td className="border-red-500 pr-3">
                  <button>✏️</button>
                </td>
                <td>
                  <button className="w-[20px] border-t-[6px] border-red-500"></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySchedule;
