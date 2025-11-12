import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const HackathonApplicationForm = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const hackathonId = useParams().id
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    teamName: "",
    projectIdea: "",
    techStack: "",
    github: "",
    linkedin: "",
    teamMembers: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email format";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.teamName.trim()) e.teamName = "Team name is required";
    if (!form.projectIdea.trim()) e.projectIdea = "Project idea is required";
    if (!resumeFile) e.resume = "Project document/resume file is required";
    if (resumeFile && resumeFile.size > 5 * 1024 * 1024)
      e.resume = "File must be less than 5MB";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleFile = (e) => {
    setResumeFile(e.target.files[0]);
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      return;
    }

    try {
      setSubmitting(true);
      const data = new FormData();
      Object.entries(form).forEach(([key, val]) => data.append(key, val));
      data.append("hackathonId", hackathonId);
      data.append("projectFile", resumeFile);

      const res = await axios.post("http://localhost:3005/api/hackathon/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      setSuccessMessage(res.data.message || "Application submitted successfully ✅");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        teamName: "",
        projectIdea: "",
        techStack: "",
        github: "",
        linkedin: "",
        teamMembers: "",
      });
      setResumeFile(null);
      navigate("/explore/internships");
      setErrors({});
    } catch (err) {
      console.error("Submit error:", err);
      setErrors({ submit: err.response?.data?.error || "Submission failed." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-10"
    >
      <h2 className="text-2xl font-semibold mb-4">Apply for Hackathon</h2>

      {errors.submit && <p className="text-red-500">{errors.submit}</p>}
      {successMessage && <p className="text-green-600">{successMessage}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name *</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Phone *</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Team Name *</label>
          <input
            name="teamName"
            value={form.teamName}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
          {errors.teamName && <p className="text-red-500 text-sm">{errors.teamName}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Team Members (comma-separated)</label>
          <input
            name="teamMembers"
            value={form.teamMembers}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Project Idea *</label>
          <textarea
            name="projectIdea"
            value={form.projectIdea}
            onChange={handleChange}
            rows="4"
            className="border w-full p-2 rounded"
          />
          {errors.projectIdea && (
            <p className="text-red-500 text-sm">{errors.projectIdea}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Tech Stack</label>
          <input
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">GitHub</label>
          <input
            name="github"
            value={form.github}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">LinkedIn</label>
          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">
            Upload Resume / Project ZIP *
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.zip"
            onChange={handleFile}
          />
          {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
        </div>
      </div>

      <div className="mt-4 text-right">
        <button
          disabled={submitting}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default HackathonApplicationForm;
