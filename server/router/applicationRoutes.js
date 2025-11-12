const express = require("express");
const { submitApplication,getAllInternships,getApplicationById,updateStatus} = require("../controllers/applicationController");
const { authMiddleware } = require('../middleware/auth');
const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post(
  "/internship/apply",
  authMiddleware,
  upload.single("resume"), 
  submitApplication
);

router.get("/internship/applications",getAllInternships);

router.get("/internship/applications/:id",getApplicationById);

router.patch("/internship/applications/:id/status", updateStatus);


module.exports = router;
