const express = require("express");
const router = express.Router();
const {
  getAllScholarships,
  getScholarshipById,
  handleCreateScholarship
} = require("../controllers/scholarship");

// GET all scholarships
router.get("/all/scholarship", getAllScholarships);

// GET a single scholarship by ID
router.get("/scholarship/:id", getScholarshipById);

router.post("/scholarships",handleCreateScholarship)

module.exports = router;
