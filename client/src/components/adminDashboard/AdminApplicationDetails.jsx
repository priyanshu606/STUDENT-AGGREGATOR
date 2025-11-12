import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AdminApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3005/api/internship/applications/${id}`)
      .then(res => setApp(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const updateStatus = async (status) => {
    await axios.patch(`http://localhost:3005/api/internship/applications/${id}/status`, { status });
    navigate("/admin/applications");
  };

  if (!app) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow mt-20 rounded">
      <h2 className="text-2xl font-semibold mb-4">{app.fullName}</h2>

      <p><strong>Email:</strong> {app.email}</p>
      <p><strong>Phone:</strong> {app.phone}</p>
      <p><strong>University:</strong> {app.university}</p>
      <p><strong>Degree:</strong> {app.degree} ({app.year})</p>
      <p><strong>Skills:</strong> {app.skills}</p>
      <p><strong>LinkedIn:</strong> {app.linkedin}</p>
      <p><strong>GitHub:</strong> {app.github}</p>
      <p><strong>Portfolio:</strong> {app.portfolio}</p>

      <p className="mt-4"><strong>Cover Letter:</strong></p>
      <p className="border p-3 rounded bg-gray-50">{app.coverLetter || "No cover letter"}</p>

      <a
        href={app.resumeUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-indigo-600 underline"
      >
        Download Resume
      </a>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => updateStatus("accepted")}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Accept
        </button>

        <button
          onClick={() => updateStatus("rejected")}
          className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default AdminApplicationDetails;
