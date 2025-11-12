import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const InternshipApplicationForm = () => {
  const internshipId = useParams().id;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    year: "",
    skills: "",
    linkedin: "",
    github: "",
    portfolio: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // simple validation rules
  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.university.trim()) e.university = "University is required";
    if (!form.degree.trim()) e.degree = "Degree is required";
    if (!form.year.trim()) e.year = "Graduation year is required";
    if (!resumeFile) e.resume = "Resume (PDF/DOCX) is required";
    // optional: limit resume file size to 5MB
    if (resumeFile && resumeFile.size > 5 * 1024 * 1024)
      e.resume = "Resume must be ≤ 5MB";
    return e;
  }

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleFile = (e) => {
  const file = e.target.files[0];
  console.log("Selected Resume File:", file);
  setResumeFile(file);
  setErrors((prev) => ({ ...prev, resume: undefined }));
};

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSuccessMessage("");
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    try {
      setSubmitting(true);
      const data = new FormData();
      data.append("fullName", form.fullName);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("university", form.university);
      data.append("degree", form.degree);
      data.append("year", form.year);
      data.append("skills", form.skills);
      data.append("linkedin", form.linkedin);
      data.append("github", form.github);
      data.append("portfolio", form.portfolio);
      data.append("coverLetter", form.coverLetter);
      if (internshipId) data.append("internshipId", internshipId);
      data.append("resume", resumeFile);

      const res = await axios.post(
        "http://localhost:3005/api/internship/apply",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );

      setSuccessMessage(
        res.data.message || "Application submitted successfully"
      );
      navigate("/explore/internships");
      setErrors({});
    } catch (err) {
      console.error("Submit error:", err);
      if (err.response?.data?.error) {
        setErrors({ submit: err.response.data.error });
      } else {
        setErrors({ submit: "Failed to submit application. Try again." });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white p-6 rounded shadow mt-10"
    >
      <h2 className="text-2xl mb-4 font-semibold">Apply for Internship</h2>

      {errors.submit && (
        <div className="text-red-600 mb-2">{errors.submit}</div>
      )}
      {successMessage && (
        <div className="text-green-600 mb-2">{successMessage}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full name *</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.fullName && (
            <div className="text-red-500 text-sm">{errors.fullName}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Phone *</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.phone && (
            <div className="text-red-500 text-sm">{errors.phone}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">University *</label>
          <input
            name="university"
            value={form.university}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.university && (
            <div className="text-red-500 text-sm">{errors.university}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Degree *</label>
          <input
            name="degree"
            value={form.degree}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.degree && (
            <div className="text-red-500 text-sm">{errors.degree}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Graduation year *</label>
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.year && (
            <div className="text-red-500 text-sm">{errors.year}</div>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">
            Skills (comma separated)
          </label>
          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">LinkedIn</label>
          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">GitHub</label>
          <input
            name="github"
            value={form.github}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">
            Portfolio / Website
          </label>
          <input
            name="portfolio"
            value={form.portfolio}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Cover Letter</label>
          <textarea
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={5}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">
            Resume (PDF or DOCX) *
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
          />
          {errors.resume && (
            <div className="text-red-500 text-sm">{errors.resume}</div>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className={`px-6 py-2 rounded bg-indigo-600 text-white ${
            submitting ? "opacity-60" : "hover:bg-indigo-700"
          }`}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default InternshipApplicationForm;
