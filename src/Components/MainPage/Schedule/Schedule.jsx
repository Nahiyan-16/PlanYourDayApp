import { useEffect, useState } from "react";
import Sidebar from "../HomePageUtils/Sidebar";
import Form from "./Form";
import DisplaySchedule from "./DisplaySchedule";
import {
  getScheduleService,
  setScheduleService,
} from "../../../Services/apiService";

const Schedule = () => {
  const [schedule, setSchedule] = useState();

  const userObj = JSON.parse(localStorage.getItem("User Information"));
  const email = userObj.email;

  useEffect(() => {
    getSchedule(email);
  }, []);

  const getSchedule = async (email) => {
    const schedule = await getScheduleService(email);
    sessionStorage.setItem("formData", JSON.stringify(schedule.schedule));
    setSchedule(schedule);
  };

  const handleSubmit = async (data) => {
    setSchedule(data);
    //Task 2
    try {
      const existingData = sessionStorage.getItem("formData");
      const existingDataArray = existingData ? JSON.parse(existingData) : [];
      const updatedDataArray = [...existingDataArray, data];
      sessionStorage.setItem("formData", JSON.stringify(updatedDataArray));
    } catch (error) {
      console.error("Error updating session storage:", error);
    }
    //Task 3
    const userObj = JSON.parse(localStorage.getItem("User Information"));
    await setScheduleService(userObj.email, data);
  };

  return (
    <div>
      <Sidebar />
      <div className="text-5xl flex justify-center items-center">
        Let's start planning!
      </div>
      <div className="flex justify-center items-center mt-10">
        <Form onFormSubmit={(data) => handleSubmit(data)} />
        <DisplaySchedule schedule={schedule} />
      </div>
    </div>
  );
};

export default Schedule;
