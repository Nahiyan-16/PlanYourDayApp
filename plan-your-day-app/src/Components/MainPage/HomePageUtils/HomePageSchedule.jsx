import React from "react";

const HomePageSchedule = () => {
  return (
    <div className="border-2 border-black rounded-lg shadow-2xl h-[60vh] m-20 flex flex-col justify-center items-center text-xl text-center">
      <div className="mb-6">
        Looks like you have nothing scheduled for today 🙈
      </div>
      <button className="bg-charcoal text-aliceblue py-3 px-4 rounded-2xl hover:shadow-2xl hover:scale-[1.03] transition duration-150">
        Start Planning ✏️
      </button>
    </div>
  );
};

export default HomePageSchedule;
