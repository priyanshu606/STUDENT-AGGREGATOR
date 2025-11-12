const express = require("express");
const { authMiddleware } = require("../middleware/auth");
const { applyTechEvent ,getAllEvents,getAllEventsById,updateStatus} = require("../controllers/techEventApplicationController");

const router = express.Router();

router.post("/tech-event/apply", authMiddleware, applyTechEvent);

router.get("/tech-event/applications",getAllEvents);
router.get("/tech-event/applications/:id",getAllEventsById);
router.patch("/tech-event/applications/:id/status", updateStatus);
module.exports = router;
