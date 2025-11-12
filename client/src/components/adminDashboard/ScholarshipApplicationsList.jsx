import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ScholarshipApplicationsList = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/api/applications")
      .then(res => setScholarships(res.data))
      .catch(err => console.error("Error fetching applications:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-2xl font-semibold mb-4">Scholarship Applications</h1>

      <table className="w-full border rounded shadow-md">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-2 text-left">Full Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">College</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {scholarships.map((s) => (
            <tr key={s._id} className="border-b hover:bg-gray-50">
              <td className="p-2">{s.fullName}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.college}</td>

              <td className="p-2 text-center">
                <Link
                  to={`/admin/scholarships/${s._id}`}
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

export default ScholarshipApplicationsList;
