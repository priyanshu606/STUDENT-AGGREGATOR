const express = require("express");
const { applyHackathon , getAllHackathons,getHackathonById,updateStatus} = require("../controllers/hackathonApplicationController");
const {authMiddleware} = require('../middleware/auth')
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "uploads/" });
router.post("/hackathon/apply", authMiddleware, upload.single("projectFile"), applyHackathon);
router.get("/hackathon/applications",getAllHackathons);
router.get("/hackathon/applications/:id",getHackathonById);
router.patch("/hackathon/applications/:id/status", updateStatus);
module.exports = router;
