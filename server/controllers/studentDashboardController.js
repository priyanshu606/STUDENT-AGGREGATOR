const Student = require("../models/userSignUp.js");
const InternshipApplication = require("../models/application.js");
const HackathonApplication = require("../models/HackathonApplication.js");
const ScholarshipApplication = require("../models/ScholarshipApplication.js");
const TechEventApplication = require("../models/TechEventApplication.js");
const CodingContestApplication = require("../models/ContestApplication.js");


async function getStudentDashboard (req, res) {
  try {
    const studentId = req.params.id;

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const internships = await InternshipApplication.find({ createdBy: studentId })
      .populate("internshipId", "title company deadline");

    const hackathons = await HackathonApplication.find({ createdBy: studentId })
      .populate("hackathonId", "title company registrationDeadline");

    const scholarships = await ScholarshipApplication.find({ createdBy: studentId })
      .populate("scholarshipId", "title provider deadline");

    const techEvents = await TechEventApplication.find({ createdBy: studentId })
      .populate("eventId", "title organizer date");

    const codingContests = await CodingContestApplication.find({ createdBy: studentId })
      .populate("contestId", "title platform date");


    // ✅ Console.log All Application Data
    console.log("\n===== STUDENT DASHBOARD DATA =====");
    console.log("Student:", student.fullName, "-", student.email);

    console.log("\nInternship Applications:");
    console.table(internships.map(app => ({
      title: app.internshipId?.title,
      status: app.status
    })));

    console.log("\nHackathon Applications:");
    console.table(hackathons.map(app => ({
      title: app.hackathonId?.title,
      status: app.status
    })));

    console.log("\nScholarship Applications:");
    console.table(scholarships.map(app => ({
      title: app.scholarshipId?.title,
      status: app.status
    })));

    console.log("\nTech Event Applications:");
    console.table(techEvents.map(app => ({
      title: app.eventId?.title,
      status: app.status
    })));

    console.log("\nCoding Contest Applications:");
    console.table(codingContests.map(app => ({
      title: app.contestId?.title,
      status: app.status
    })));

    console.log("=================================\n");


    // ✅ Send response to front-end
    return res.json({
      student,
      events: {
        Internship: internships.map(app => ({
          name: app.internshipId?.title || "Unknown",
          status: app.status
        })),
        Hackathon: hackathons.map(app => ({
          name: app.hackathonId?.title || "Unknown",
          status: app.status
        })),
        Scholarship: scholarships.map(app => ({
          name: app.scholarshipId?.title || "Unknown",
          status: app.status
        })),
        TechEvent: techEvents.map(app => ({
          name: app.eventId?.title || "Unknown",
          status: app.status
        })),
        CodingContest: codingContests.map(app => ({
          name: app.contestId?.title || "Unknown",
          status: app.status
        })),
      }
    });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


module.exports = { getStudentDashboard };