import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ScholarshipApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/applications/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const updateStatus = async (status) => {
    await axios.patch(`http://localhost:3005/api/scholarships/applications/${id}/status`, { status });
    navigate("/admin/scholarships");
  };

  if (!data) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow mt-20 rounded">
      <h2 className="text-2xl font-semibold mb-6">Application Details</h2>

      <div className="space-y-3">
        <p><strong>Full Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Address:</strong> {data.address}</p>

        <hr className="my-3" />

        <p><strong>College:</strong> {data.college}</p>
        <p><strong>Course:</strong> {data.course}</p>
        <p><strong>Year of Study:</strong> {data.yearOfStudy}</p>
        <p><strong>CGPA:</strong> {data.cgpa}</p>
        <p><strong>Enrollment No:</strong> {data.enrollmentNo}</p>

        <hr className="my-3" />

        <p><strong>Family Income:</strong> {data.familyIncome}</p>
        <p><strong>Father's Occupation:</strong> {data.fatherOccupation}</p>
        <p><strong>Mother's Occupation:</strong> {data.motherOccupation}</p>
        <p><strong>Reason for Scholarship:</strong> {data.reason}</p>

        <hr className="my-3" />

        <p><strong>ID Proof:</strong></p>
        <a
          href={`http://localhost:3005/${data.idProofPath}`}
          target="_blank"
          className="text-indigo-600 underline"
        >
          View ID Proof
        </a>

        <p className="mt-3"><strong>Income Proof:</strong></p>
        <a
          href={`http://localhost:3005/${data.incomeProofPath}`}
          target="_blank"
          className="text-indigo-600 underline"
        >
          View Income Proof
        </a>
      </div>

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

export default ScholarshipApplicationDetails;
