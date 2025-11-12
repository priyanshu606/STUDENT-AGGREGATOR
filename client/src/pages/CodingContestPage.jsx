import React, { useState, useEffect } from "react";
import axios from "axios";
import ContestDetails from "../components/ExporePageComponent/ContestDetails";
import ContestCard from "../components/ExporePageComponent/ContestCard";
import CodingContestsFilter from "../components/ExporePageComponent/CodingContestsFilter";

const CodingContestPage = () => {
  const [selectedContest, setSelectedContest] = useState(null);
  const [contests, setContests] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [activeTag, setActiveTag] = useState("All tags");

  const fetchContests = async () => {
    try {
      const { data } = await axios.get("http://localhost:3005/api/all/contest", {
        params: { search, status: filter, tags: activeTag },
      });
      setContests(data);
    } catch (err) {
      console.log("Error loading contests:", err);
    }
  };

  useEffect(() => {
    fetchContests();
  }, [search, filter, activeTag]); 

  return (
    <div className="flex flex-col mt-14 bg-gray-50">
      {/* Filter */}
      <div className="sticky top-[60px] z-30 bg-white px-2 shadow-sm">
        <CodingContestsFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
      </div>

      {/* Contest Panels */}
      <div className="flex h-screen mt-1">
        <div className="w-1/3 border-r bg-white p-4 overflow-y-auto">
          {contests.length > 0 ? (
            contests.map((contest) => (
              <ContestCard
                key={contest._id}
                contest={contest}
                onSelect={setSelectedContest}
                isSelected={selectedContest?._id === contest._id}
              />
            ))
          ) : (
            <div className="text-center text-gray-500">No contests found.</div>
          )}
        </div>

        <div className="w-2/3 overflow-y-auto">
          {selectedContest ? (
            <ContestDetails contest={selectedContest} />
          ) : (
            <div className="p-6 text-center text-gray-500">
              Select a contest to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingContestPage;
