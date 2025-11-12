import { Edit2, User, BookOpen } from "lucide-react";

export default function StudentProfileCard({
  student,
  isEditing,
  setIsEditing,
  handleInputChange,
  saveProfile,
}) {
  const handleSave = () => {
    saveProfile(); 
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 space-y-6">
      {/* Avatar */}
      <div className="text-center">
        <img
          src={student.avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-blue-100"
        />

        {isEditing ? (
          <div className="mt-4 space-y-2">
            <input
              value={student.name || ""}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter Name"
            />
            <input
              value={student.branch || ""}
              onChange={(e) => handleInputChange("branch", e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Branch"
            />
            <input
              value={student.college || ""}
              onChange={(e) => handleInputChange("college", e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="College Name"
            />
            <input
              value={student.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="City"
            />
          </div>
        ) : (
          <>
            <h1 className="mt-4 text-2xl font-extrabold text-gray-900">
              {student.name}
            </h1>
            <p className="text-blue-600 font-medium">{student.branch}</p>
            <p className="text-gray-500">
              {student.college}, {student.city}
            </p>
          </>
        )}
      </div>

      {/* Bio */}
      <div>
        <h3 className="flex items-center text-lg font-bold text-gray-800 mb-1">
          <User className="w-5 h-5 text-blue-500 mr-2" /> About Me
        </h3>
        {isEditing ? (
          <textarea
            value={student.bio || ""}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            rows="3"
          />
        ) : (
          <p className="text-gray-700 italic">
            "{student.bio || "No bio added yet."}"
          </p>
        )}
      </div>

      {/* Skills */}
      <div>
        <h3 className="flex items-center text-lg font-bold text-gray-800 mb-2">
          <BookOpen className="w-5 h-5 text-blue-500 mr-2" /> Skills
        </h3>

        {isEditing ? (
          <input
            value={student.skills?.join(", ") || ""}
            onChange={(e) =>
              handleInputChange(
                "skills",
                e.target.value.split(",").map((s) => s.trim())
              )
            }
            className="w-full border rounded-lg px-3 py-2"
            placeholder="e.g. React, C++, UI Design"
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {student.skills?.length > 0 ? (
              student.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full shadow hover:bg-blue-600 transition"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500 italic">No skills added yet.</p>
            )}
          </div>
        )}
      </div>

      {/* Edit / Save Button */}
      <div className="text-center pt-2">
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 flex items-center justify-center mx-auto gap-2"
        >
          <Edit2 className="w-4 h-4" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}
