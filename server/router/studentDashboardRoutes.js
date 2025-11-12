const express = require("express");
const { getStudentDashboard }  = require("../controllers/studentDashboardController") ;

const router = express.Router();
router.get("/student/dashboard/:id", getStudentDashboard);

module.exports = router;
