const express = require("express");
const { submitApplication, getApplications,getContestById ,updateStatus} = require("../controllers/contestApplicationController");

const router = express.Router();

router.post("/apply", submitApplication);
router.get("/contest/applications", getApplications);
router.get("/contest/applications/:id", getContestById);
router.patch("/contest/applications/:id/status", updateStatus);
module.exports = router;
