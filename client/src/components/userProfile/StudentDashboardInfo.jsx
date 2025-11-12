import { useState } from "react";
import { Users, Bookmark, BarChart, Megaphone, Code } from "lucide-react";

const SectionTitle = ({ icon: Icon, children }) => (
  <h3 className="flex items-center text-xl font-bold text-gray-800 mb-3">
    <Icon className="w-5 h-5 text-blue-500 mr-2" />
    {children}
  </h3>
);

const StudentDashboardInfo = ({ events }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { key: "Internship", icon: Users },
    { key: "Hackathon", icon: Bookmark },
    { key: "Scholarship", icon: BarChart },
    { key: "TechEvent", icon: Megaphone },
    { key: "CodingContest", icon: Code },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">

      <SectionTitle icon={BarChart}>Event Participation</SectionTitle>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        {categories.map(({ key, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`flex flex-col items-center p-4 rounded-lg transition shadow-sm ${
              selectedCategory === key ? "bg-blue-200" : "bg-blue-50 hover:bg-blue-100"
            }`}
          >
            <Icon className="w-6 h-6 text-blue-600" />
            <span className="mt-2 text-sm font-medium text-gray-700 capitalize">{key}</span>
          </button>
        ))}
      </div>

      {/* Show list for selected event type */}
      {selectedCategory && (
        <div className="space-y-3 border-t pt-4">
          <h4 className="text-lg font-semibold text-gray-800">
            {selectedCategory} Applications
          </h4>

          {events[selectedCategory].length === 0 ? (
            <p className="text-gray-500">No participation yet.</p>
          ) : (
            events[selectedCategory].map((item, index) => (
              <div key={index} className="flex justify-between border p-3 rounded-lg">
                <span className="font-medium">{item.name}</span>
                <span className={`px-3 py-1 rounded-lg capitalize font-semibold
                  ${item.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                    item.status === "accepted" ? "bg-green-100 text-green-700" :
                    "bg-red-100 text-red-700"}`}>
                  {item.status}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default StudentDashboardInfo;
