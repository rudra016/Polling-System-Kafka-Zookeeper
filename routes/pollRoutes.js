
const express = require("express");
const { createPoll, vote, getPollResults } = require("../controllers/pollController");

const router = express.Router();

router.post("/", createPoll);
router.post("/:id/vote", vote);
router.get("/:id", getPollResults);

module.exports = router;
