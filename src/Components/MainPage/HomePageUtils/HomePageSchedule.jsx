import React from "react";
import { Link } from "react-router-dom";

const HomePageSchedule = () => {
  const hasPlans = false;
  return (
    <div className="border-2 border-black rounded-lg shadow-2xl min-h-[30vh] m-20 flex flex-col justify-center items-center text-xl text-center p-5">
      {hasPlans ? (
        <>
          <h2 className="mb-5">Here's what you have planned for today</h2>
          <table className="w-[100%]">
            <thead>
              <tr>
                <th className="w-[34%]">Morning 🍳</th>
                <th className="w-[33%]">Evening 🌞</th>
                <th className="w-[33%]">Night 🌙</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="text-xl underline">6:00 AM </p>
                  <p>Make breakfast</p>
                </td>
                <td>
                  <p className="text-xl underline">12:00 PM </p>
                  <p>Make lunch</p>
                </td>
                <td>
                  <p className="text-xl underline">6:00 PM </p>
                  <p>Make dinner</p>
                </td>
              </tr>

              <tr>
                <td>
                  <p className="text-xl underline">7:00 AM </p>
                  <p>Go to work</p>
                </td>
                <td>
                  <p className="text-xl underline">1:00 PM </p>
                  <p>Go back to work</p>
                </td>
                <td>
                  <p className="text-xl underline">8:00 PM </p>
                  <p>Go to bed</p>
                </td>
              </tr>
            </tbody>
          </table>
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
