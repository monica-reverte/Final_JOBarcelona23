const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  Player_id: {
    type: String,
  },
  Player: {
    type: String,
  },
  Squad_id: {
    type: String,
  },
  Nation: {
    type: String,
  },
  Pos: {
    type: String,
  },
  Age: {
    type: Number,
  },

  Born: {
    type: Number,
  },
  MP: {
    type: Number,
  },
  Starts: {
    type: Number,
  },
  Min: {
    type: Number,
  },
  Gls: {
    type: Number,
  },
  Ast: {
    type: Number,
  },
  PK: {
    type: Number,
  },
  PKatt: {
    type: Number,
  },
  CrdY: {
    type: Number,
  },
  CrdR: {
    type: Number,
  },
  Progression_PrgC: {
    type: Number,
  },
  Progression_PrgP: {
    type: Number,
  },
  Progression_PrgR: {
    type: Number,
  },
  Sh: {
    type: Number,
  },
  SoT: {
    type: Number,
  },
  Dist: {
    type: Number,
  },
  FK: {
    type: Number,
  },
  Passes_Cmp: {
    type: Number,
  },
  Passes_Att: {
    type: Number,
  },
  Passes_TotDist: {
    type: Number,
  },
  Passes_PrgDist: {
    type: Number,
  },
  KP: {
    type: Number,
  },
  PPA: {
    type: Number,
  },
  Tkl: {
    type: Number,
  },
  Challenges_Tkl: {
    type: Number,
  },
  Challenges_Lost: {
    type: Number,
  },
  Blocks: {
    type: Number,
  },
  Err: {
    type: Number,
  },
  Touches: {
    type: Number,
  },
  Touches_DefPen: {
    type: Number,
  },
  Touches_AttPen: {
    type: Number,
  },
  TakeOnsSucc: {
    type: Number,
  },
  TakeOnsTkld: {
    type: Number,
  },
  Carries_Carries: {
    type: Number,
  },
  Carries_TotDist: {
    type: Number,
  },
  Carries_PrgDist: {
    type: Number,
  },
  Carries_Dis: {
    type: Number,
  },
  Receiving_Rec: {
    type: Number,
  },
  Subs: {
    type: Number,
  },
  unSub: {
    type: Number,
  },
  CrdY: {
    type: Number,
  },
  Fls: {
    type: Number,
  },
  Fld: {
    type: Number,
  },
  Off: {
    type: Number,
  },
  PKcon: {
    type: Number,
  },
  OG: {
    type: Number,
  },
  Recov: {
    type: Number,
  },

  
});

module.exports = mongoose.model("Player", PlayerSchema);