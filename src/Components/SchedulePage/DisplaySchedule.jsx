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
      <div className="flex justify-center items-center w-[62%] ml-auto">
        <div className="text-2xl mb-5">Recent Added Events</div>
        <button className="text-2xl mb-5 ml-auto bg-rustyred text-snow py-2 px-3 rounded-2xl hover:shadow-2xl hover:scale-[1.03] hover:underline transition duration-150 cursor-pointer">
          Edit
        </button>
      </div>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySchedule;
