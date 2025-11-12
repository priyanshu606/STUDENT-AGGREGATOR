const express = require("express");
const multer = require("multer");
const { authMiddleware } = require("../middleware/auth");
const { applyScholarship,getAllScholarship,getScholarshipById,updateStatus } = require("../controllers/scholarshipApplicationController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post(
  "/scholarship/apply",
  authMiddleware,
  upload.fields([
    { name: "idProof", maxCount: 1 },
    { name: "incomeProof", maxCount: 1 },
  ]),
  applyScholarship
);

router.get("/applications",getAllScholarship);

router.get("/applications/:id",getScholarshipById);

router.patch("/scholarships/applications/:id/status", updateStatus);
module.exports = router;
