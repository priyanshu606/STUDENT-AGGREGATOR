import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ScholarshipApplicationForm = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const scholarshipId = useParams().id;
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    college: "",
    course: "",
    yearOfStudy: "",
    cgpa: "",
    enrollmentNo: "",
    familyIncome: "",
    fatherOccupation: "",
    motherOccupation: "",
    reason: "",
  });

  const [documents, setDocuments] = useState({
    idProof: null,
    incomeProof: null,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setDocuments({ ...documents, [e.target.name]: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    data.append("idProof", documents.idProof);
    data.append("incomeProof", documents.incomeProof);
    if (scholarshipId) data.append("scholarshipId", scholarshipId);
    try {
      const res = await axios.post("http://localhost:3005/api/scholarship/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert(res.data.message);
      navigate("/explore/scholarship");
    } catch (err) {
      alert(err.response?.data?.error || "Submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 shadow rounded mt-10 space-y-4">
      <h2 className="text-xl font-bold">Scholarship Application Form</h2>

      {Object.keys(form).map((key) => (
        key !== "reason" ? (
          <input
            key={key}
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1").toUpperCase()}
            value={form[key]}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        ) : null
      ))}

      <textarea
        name="reason"
        placeholder="Why do you need this scholarship?"
        value={form.reason}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        rows={4}
      />

      <label className="block">Upload ID Proof *</label>
      <input type="file" name="idProof" onChange={handleFileChange} />

      <label className="block mt-2">Upload Income Proof *</label>
      <input type="file" name="incomeProof" onChange={handleFileChange} />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit Application</button>
    </form>
  );
};

export default ScholarshipApplicationForm;
