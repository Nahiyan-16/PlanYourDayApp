import { useState, useEffect } from "react";

const Form = ({ onFormSubmit }) => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    eventDate: "",
    eventTime: "",
    eventTitle: "",
    eventBody: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      eventDate: today,
    }));
  }, [today]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Task 1
    onFormSubmit(formData);

    //Task 2
    try {
      const existingData = sessionStorage.getItem("formData");
      const existingDataArray = existingData ? JSON.parse(existingData) : [];
      const updatedDataArray = [...existingDataArray, formData];
      sessionStorage.setItem("formData", JSON.stringify(updatedDataArray));
    } catch (error) {
      console.error("Error updating session storage:", error);
    }
    //Task 3
    //....
  };
  return (
    <div className="border min-h-[60vh] mx-10 mt-5 min-w-[25%]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="text-3xl mb-2">Enter Event</div>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          min={today}
          required
        />
        <br />

        <label htmlFor="eventTime">Time:</label>
        <input
          type="time"
          id="eventTime"
          name="eventTime"
          value={formData.eventTime}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="eventTitle">Title:</label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="eventBody">Body:</label>
        <textarea
          id="eventBody"
          name="eventBody"
          value={formData.eventBody}
          onChange={handleChange}
          rows="4"
        ></textarea>
        <br />

        <input
          type="submit"
          value="Create Event"
          className="bg-charcoal text-aliceblue py-3 px-4 rounded-2xl hover:shadow-2xl hover:scale-[1.03] transition duration-150 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;
