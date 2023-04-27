const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teamsController");

router.get("/squads/:squadId/players", teamsController.getPlayersFromSquad);

module.exports = router;
