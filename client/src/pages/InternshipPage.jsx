import { useEffect, useState } from "react";
import InternshipCard from "../components/ExporePageComponent/InternshipCard";
import InternshipDetails from "../components/ExporePageComponent/InternshipDetails";
import FilterInternship from "../components/ExporePageComponent/FilterInternship";
import axios from "axios";

const InternshipPage = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3005/api/all/internship");
        setInternships(res.data);
      } catch (err) {
        console.error("Error fetching internships:", err);
        setError("Failed to load internships. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="flex flex-col mt-14">
      <FilterInternship setInternships={setInternships} />
      <div className="flex h-screen mt-1">
        {/* Left: List */}
        <div className="w-1/3 border-r p-4 overflow-y-auto">
          {loading ? (
            <p className="text-gray-500">Loading internships...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : internships.length === 0 ? (
            <p className="text-gray-500">No internships found.</p>
          ) : (
            internships.map((internship) => (
              <InternshipCard
                key={internship._id}
                internship={internship}
                isSelected={selectedInternship?._id === internship._id}
                onSelect={setSelectedInternship}
              />
            ))
          )}
        </div>

        {/* Right: Details */}
        <div className="w-2/3 overflow-y-auto">
          <InternshipDetails internship={selectedInternship} />
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
