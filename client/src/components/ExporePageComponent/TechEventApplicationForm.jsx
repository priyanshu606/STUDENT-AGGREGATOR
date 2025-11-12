import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TechEventApplicationForm = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    yearOrExperience: "",
    eventName: "",
    eventType: "",
    participationType: "",
    reason: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3005/api/tech-event/apply",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(res.data.message);
      navigate("/explore/tech-events");
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 shadow rounded mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center">Tech Event Application Form</h2>

      {Object.keys(form).map((key) =>
        key !== "eventType" && key !== "participationType" && key !== "reason" ? (
          <input
            key={key}
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1")}
            value={form[key]}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        ) : null
      )}

      <select
        name="eventType"
        value={form.eventType}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      >
        <option value="">Select Event Type</option>
        <option>Hackathon</option>
        <option>Workshop</option>
        <option>Seminar</option>
        <option>Tech Talk</option>
      </select>

      <select
        name="participationType"
        value={form.participationType}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      >
        <option value="">Participation Type</option>
        <option>Participant</option>
        <option>Attendee</option>
        <option>Speaker</option>
      </select>

      <textarea
        name="reason"
        placeholder="Why do you want to join this event?"
        value={form.reason}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        rows={4}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Submit Application
      </button>
    </form>
  );
};

export default TechEventApplicationForm;
