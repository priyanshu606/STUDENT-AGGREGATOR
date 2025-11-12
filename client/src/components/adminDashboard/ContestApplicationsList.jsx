import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContestApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/api/contest/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-2xl font-semibold mb-4">Coding Contest Applications</h1>

      <table className="w-full border rounded shadow-md">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Platform</th>
            <th className="p-2 text-center">Type</th>
            <th className="p-2 text-center">Status</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app._id} className="border-b hover:bg-gray-50">
              <td className="p-2">{app.name}</td>
              <td className="p-2">{app.platform}</td>
              <td className="p-2 text-center">{app.type}</td>

              <td className="p-2 text-center">
                <span
                  className={`px-2 py-1 rounded text-white text-sm ${
                    app.status === "accepted"
                      ? "bg-green-600"
                      : app.status === "rejected"
                      ? "bg-red-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {app.status}
                </span>
              </td>

              <td className="p-2 text-center">
                <Link
                  to={`/admin/coding-contest/applications/${app._id}`}
                  className="text-indigo-600 hover:underline"
                >
                  View →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContestApplicationsList;
