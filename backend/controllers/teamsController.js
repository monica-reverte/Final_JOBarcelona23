const model = require("../models");

const getAllTeams = async (req, res) => {
  try {
    const teams = await model.Team.find({});
    console.log(`Found ${teams.length} teams`);
    res.status(200).send({ teams });
  } catch (error) {
    res.status(504).send({ message: error.message });
  }

  // res.status(200).send({
  //   data: "We got all Teams"
  // });
};

module.exports = {
  getAllTeams: getAllTeams,
};
