import { useState, useEffect } from "react";

const Form = ({ onFormSubmit }) => {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const localDate = new Date(Date.now() - tzoffset)
    .toISOString()
    .slice(0, -1)
    .split("T")[0];

  const [formData, setFormData] = useState({
    eventDate: "",
    eventTime: "",
    eventTitle: "",
    eventBody: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      eventDate: localDate,
    }));
  }, [localDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Task 1
    onFormSubmit(formData);
  };
  return (
    <div className="border min-h-[60vh] mx-10 mt-5 min-w-[25%] bg-rustyred text-snow p-8 rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="text-3xl mb-4">Create an Event!</div>
        <label htmlFor="eventDate">Date</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          min={localDate}
          required
          className="text-charcoal rounded p-1"
        />
        <br />

        <label htmlFor="eventTime">Time</label>
        <input
          type="time"
          id="eventTime"
          name="eventTime"
          value={formData.eventTime}
          onChange={handleChange}
          required
          className="text-charcoal rounded p-1"
        />
        <br />

        <label htmlFor="eventTitle">Title</label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleChange}
          required
          className="text-charcoal rounded p-1"
        />
        <br />

        <label htmlFor="eventBody">Body</label>
        <textarea
          id="eventBody"
          name="eventBody"
          value={formData.eventBody}
          onChange={handleChange}
          rows="4"
          className="text-charcoal rounded p-1"
        ></textarea>
        <br />

        <input
          type="submit"
          value="Create Event"
          className="bg-[#FCF6F5] text-charcoal hover:underline py-3 px-4 rounded-2xl hover:shadow-2xl hover:scale-[1.03] transition duration-150 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;
