import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const TechEventApplicationDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3005/api/tech-event/applications/${id}`)
      .then(res => setApp(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const updateStatus = async (status) => {
    await axios.patch(`http://localhost:3005/api/tech-event/applications/${id}/status`, { status });
  };

  if (!app) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow mt-20 rounded">
      <h2 className="text-2xl font-semibold mb-4">{app.fullName}</h2>

      <p><strong>Email:</strong> {app.email}</p>
      <p><strong>Phone:</strong> {app.phone}</p>
      <p><strong>Organization:</strong> {app.organization}</p>
      <p><strong>Role:</strong> {app.role}</p>
      <p><strong>Year/Experience:</strong> {app.yearOrExperience}</p>

      <hr className="my-4" />

      <p><strong>Event:</strong> {app.eventName}</p>
      <p><strong>Event Type:</strong> {app.eventType}</p>
      <p><strong>Participation Type:</strong> {app.participationType}</p>

      <p className="mt-4"><strong>Reason:</strong></p>
      <p className="border p-3 rounded bg-gray-50">{app.reason}</p>

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

export default TechEventApplicationDetails;
