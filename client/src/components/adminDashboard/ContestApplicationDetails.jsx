import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ContestApplicationDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/contest/applications/${id}`)
      .then((res) => setApp(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const updateStatus = async (status) => {
    await axios.patch(
      `http://localhost:3005/api/contest/applications/${id}/status`,
      { status }
    );
  };

  if (!app) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow mt-20 rounded">
      <h2 className="text-2xl font-semibold mb-4">{app.name}</h2>

      <p><strong>Email:</strong> {app.email}</p>
      <p><strong>Platform:</strong> {app.platform}</p>
      <p><strong>Contest Type:</strong> {app.type}</p>

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

export default ContestApplicationDetails;
