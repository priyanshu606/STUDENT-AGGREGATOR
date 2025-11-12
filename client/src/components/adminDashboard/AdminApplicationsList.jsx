import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:3005/api/internship/applications");
      const pending = res.data.filter(app => app.status !== "accepted" && app.status !== "rejected");
      setApplications(pending);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-2xl font-semibold mb-4">Internship Applications</h1>
      
      <table className="w-full border rounded shadow-md">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app._id} className="border-b hover:bg-gray-50">
              <td className="p-2">{app.fullName}</td>
              <td className="p-2">{app.email}</td>
              <td className="p-2 text-center">
                <span className={`px-2 py-1 rounded text-white text-sm
                  ${app.status === 'accepted' ? 'bg-green-600' :
                  app.status === 'rejected' ? 'bg-red-600' : 'bg-yellow-600'}
                `}>
                  {app.status || 'Pending'}
                </span>
              </td>
              <td className="p-2 text-center">
                <Link
                  to={`/admin/applications/${app._id}`}
                  className="text-indigo-600 hover:underline"
                >
                  View Details →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApplicationsList;
