const getAllTeams = async (req, res) => {
  res.status(200).send({
    data: "We got all Teams"
  });
};

module.exports = {
  getAllTeams: getAllTeams,
};
