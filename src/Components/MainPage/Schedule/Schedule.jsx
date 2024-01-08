import { useState } from "react";
import Sidebar from "../HomePageUtils/Sidebar";
import Form from "./Form";
import DisplaySchedule from "./DisplaySchedule";

const Schedule = () => {
  const [formData, setFormData] = useState();

  return (
    <div>
      <Sidebar />
      <div className="text-5xl flex justify-center items-center">
        Let's start planning!
      </div>
      <div className="flex justify-center items-center mt-10">
        <Form onFormSubmit={(data) => setFormData(data)} />
        <DisplaySchedule schedule={formData} />
      </div>
    </div>
  );
};

export default Schedule;
