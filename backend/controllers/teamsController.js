const model = require("../models");

const getAllTeams = async (req, res) => {
  try {
    const teams = await model.Team.find({});
    console.log(`Found ${teams.length} teams`);
    res.status(200).send({ teams });
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

const getTeamById = async (req, res) => {
  const { teamID } = req.params;
  try {
    const team = await model.Team.findById(teamID);
    res.status(200).send(team);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

const getPlayersFromSquad = async (req, res) => {
  const squadId = req.params.squadId;
  try {
    const players = await model.Player.find({ squadId: squadId });
    res.status(200).send(players);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

module.exports = {
  getAllTeams: getAllTeams,
  getTeamById: getTeamById,
  getPlayersFromSquad: getPlayersFromSquad,
};
