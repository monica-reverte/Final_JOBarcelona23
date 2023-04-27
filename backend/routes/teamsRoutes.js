const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teamsController");

router.get("/", teamsController.getAllTeams);
router.get("/:teamID", teamsController.getTeamById)

module.exports = router;
