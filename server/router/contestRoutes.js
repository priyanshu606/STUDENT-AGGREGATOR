const express = require("express");;
const { createContest, getContests } = require("../controllers/contestController");

const router = express.Router();

router.post("/add/contest", createContest);
router.get("/all/contest", getContests);

module.exports = router;
