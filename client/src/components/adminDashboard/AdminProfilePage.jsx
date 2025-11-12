import { useState } from "react";
import { Edit2, Shield, Users, Bookmark, BarChart, Megaphone, Database, AlertCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminProfilePage() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "Priyanshu Singh",
    role: "Super Admin",
    avatar: "https://via.placeholder.com/150",
    email: "admin@university.edu",
    contact: "+91 98765 43210",
    stats: {
      students: 1200,
      opportunities: 340,
      approvals: 18,
      reports: 5,
    },
    recentActivity: [
      "Added Hackathon  Google Code Jam",
      "Approved Internship  Microsoft Engage 2025",
      "Removed spam report on Netflix SDE role",
      "Posted Announcement  Annual Tech Fest",
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field, value) => {
    setAdmin((prev) => ({ ...prev, [field]: value }));
  };
  const seeDetail = ()=>{
    navigate("/admin/applications");
  }

  const seeDetailHackathon = ()=>{
    navigate("/admin/hackathon/applications");
  }

  const scholarshipApplicants = ()=>{
    navigate("/admin/scholarships");
  }
  const techEventApplicants = ()=>{
    navigate("/admin/tech-event/applications");
  }
  const codingContestApplicants = ()=>{
    navigate("/admin/coding-contest/applications");
  } 

  const SectionTitle = ({ icon: Icon, children }) => (
    <h3 className="flex items-center text-xl font-bold text-gray-800 mb-3">
      <Icon className="w-5 h-5 text-blue-500 mr-2" />
      {children}
    </h3>
  );

  return (
    <div className="min-h-screen py-12 mt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN - Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 space-y-6">
            {/* Profile */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={admin.avatar}
                  alt=""
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-100"
                />
                <span className="absolute bottom-1 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                  Admin
                </span>
              </div>

              {isEditing ? (
                <div className="mt-4 space-y-2">
                  <input
                    value={admin.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  <input
                    value={admin.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  <input
                    value={admin.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  <input
                    value={admin.contact}
                    onChange={(e) => handleInputChange("contact", e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              ) : (
                <>
                  <h1 className="mt-4 text-2xl font-extrabold text-gray-900">{admin.name}</h1>
                  <p className="text-blue-600 font-medium">{admin.role}</p>
                  <p className="text-gray-500">{admin.email}</p>
                  <p className="text-gray-500">{admin.contact}</p>
                </>
              )}
            </div>

            {/* Edit button */}
            <div className="text-center pt-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 flex items-center justify-center mx-auto gap-2"
              >
                <Edit2 className="w-4 h-4" /> {isEditing ? "Save" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          {/* Role & Permissions */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <SectionTitle icon={Shield}>Role & Permissions</SectionTitle>
            <p className="text-gray-700">
              {admin.role} has full access to manage students, opportunities, announcements, and system reports.
            </p>
          </div>

          {/* Admin Actions */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <SectionTitle icon={BarChart}>Admin Actions</SectionTitle>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button onClick={seeDetail} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition shadow-sm">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="mt-2 text-sm font-medium text-gray-700">internship</span>
                </button>
                <button onClick={seeDetailHackathon} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition shadow-sm">
                  <Bookmark className="w-6 h-6 text-blue-600" />
                  <span className="mt-2 text-sm font-medium text-gray-700">hackathon</span>
                </button>
                <button onClick={scholarshipApplicants} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition shadow-sm">
                  <BarChart className="w-6 h-6 text-blue-600" />
                  <span className="mt-2 text-sm font-medium text-gray-700">scholarship</span>
                </button>
                <button onClick={techEventApplicants} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition shadow-sm">
                  <Megaphone className="w-6 h-6 text-blue-600" />
                  <span className="mt-2 text-sm font-medium text-gray-700">tech-events</span>
                </button>
                <button onClick={codingContestApplicants}  className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition shadow-sm">
                  <Megaphone className="w-6 h-6 text-blue-600" />
                  <span className="mt-2 text-sm font-medium text-gray-700">coding contest</span>
                </button>
              </div>
            </div>

          {/* System Stats */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <SectionTitle icon={Database}>System Stats</SectionTitle>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
                <h4 className="text-xl font-bold text-blue-600">{admin.stats.students}</h4>
                <p className="text-gray-600 text-sm">Students</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
                <h4 className="text-xl font-bold text-blue-600">{admin.stats.opportunities}</h4>
                <p className="text-gray-600 text-sm">Opportunities</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
                <h4 className="text-xl font-bold text-blue-600">{admin.stats.approvals}</h4>
                <p className="text-gray-600 text-sm">Approvals</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
                <h4 className="text-xl font-bold text-blue-600">{admin.stats.reports}</h4>
                <p className="text-gray-600 text-sm">Reports</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-2xl shadow-md max-h-64 overflow-y-auto scroll-hidden">
            <SectionTitle icon={Clock}>Recent Activity</SectionTitle>
            <ul className="space-y-3">
              {admin.recentActivity.map((act, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
