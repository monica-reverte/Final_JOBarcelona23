const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  Squad_id: {
    type: String,
  },
  TeamName: {
    type: String,
  },
  League: {
    type: String,
  },
  GamesPlayedLocal: {
    type: Number,
  },
  GamesPlayedVisitor: {
    type: Number,
  },
  GamesPlayedTotal: {
    type: Number,
  },
  GamesWLocal: {
    type: Number,
  },
  GamesWVisitor: {
    type: Number,
  },
  GamesTied: {
    type: Number,
  },
  GamesLostLocal: {
    type: Number,
  },
  GamesLostVisitor: {
    type: Number,
  },
  GamesWLocalAverage: {
    type: Number,
  },
  GamesWVisitorAverage: {
    type: Number,
  },
  GamesTiedAverage: {
    type: Number,
  },
  GamesLostLocalAverage: {
    type: Number,
  },
  GamesLostVisitorAverage: {
    type: Number,
  },
});

module.exports = mongoose.model("Team", TeamSchema);
