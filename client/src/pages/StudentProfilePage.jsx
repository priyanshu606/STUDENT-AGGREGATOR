import { useState, useEffect } from "react";
import axios from "axios";
import StudentProfileCard from "../components/userProfile/StudentProfileCard";
import StudentDashboardInfo from "../components/userProfile/StudentDashboardInfo";

export default function StudentProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const studentId = user?._id;  // ✅ Correct ID stored
  const [student, setStudent] = useState(null);
  const [events, setEvents] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3005/api/student/dashboard/${studentId}`)
      .then(res => {
        setStudent(res.data.student);
        setEvents(res.data.events);
      })
      .catch(err => console.log(err));
  }, []);

  const handleInputChange = (field, value) =>
    setStudent(prev => ({ ...prev, [field]: value }));

  const saveProfile = async () => {
    try {
      const res = await axios.put(`http://localhost:3005/api/user/${studentId}`, student);
      setStudent(res.data);
      setIsEditing(false);
      alert("Profile Updated ✅");
    } catch (err) {
      console.log(err);
      alert("Update Failed ❌");
    }
  };

  if (!student || !events) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        <StudentProfileCard
          student={student}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleInputChange={handleInputChange}
          saveProfile={saveProfile}   // ✅ Pass Save Handler
        />
        <div className="lg:col-span-2">
          <StudentDashboardInfo events={events} />
        </div>
      </div>
    </div>
  );
}
