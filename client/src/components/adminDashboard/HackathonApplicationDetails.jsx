import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const HackathonApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/hackathon/applications/${id}`)
      .then((res) => setApp(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const updateStatus = async (status) => {
    await axios.patch(
      `http://localhost:3005/api/hackathon/applications/${id}/status`,
      { status }
    );
    navigate("/admin/hackathon/applications");
  };

  if (!app) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow mt-20 rounded">
      <h2 className="text-2xl font-semibold mb-4">{app.fullName}</h2>

      <p><strong>Email:</strong> {app.email}</p>
      <p><strong>Phone:</strong> {app.phone}</p>
      <p><strong>Team Name:</strong> {app.teamName}</p>
      <p><strong>Team Members:</strong> {app.teamMembers || "Not Provided"}</p>

      <p className="mt-4"><strong>Project Idea:</strong></p>
      <p className="border p-3 rounded bg-gray-50">{app.projectIdea}</p>

      <p className="mt-4"><strong>Tech Stack:</strong> {app.techStack || "Not Provided"}</p>

      <p className="mt-4"><strong>Links:</strong></p>
      <p>GitHub: {app.github || "N/A"}</p>
      <p>LinkedIn: {app.linkedin || "N/A"}</p>

      <a
        href={app.projectFileUrl}
        target="_blank"
        className="mt-4 inline-block text-indigo-600 underline"
      >
        Download Project / Resume
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

export default HackathonApplicationDetails;
