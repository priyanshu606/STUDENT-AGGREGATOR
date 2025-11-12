const express = require("express");
const router = express.Router();
const {
  createTechEvent,
  getAllTechEvents,
  getTechEventById,
} = require("../controllers/techEvents");

router.post("/add/tech-events", createTechEvent);
router.get("/all/tech-events", getAllTechEvents);
router.get("/all/tech-events/:id", getTechEventById);

module.exports = router;
