const express = require("express");
const app = express();
const cors = require("cors");

const teamsRoutes = require("./routes/teamsRoutes");
const playersRoutes = require("./routes/players");
const PORT = 4000;

//!CONNECTION DB
const connect = require("./config/db");
connect();

const corsOptions = {
  //Allow to set cookies in header
  //allow petitions from this domain when deploying maybe change to actual domain name
  origin: "http://localhost:3000",
};
//Cors middleware
app.use(cors(corsOptions));

app.use("/", teamsRoutes);
app.use("/players", playersRoutes);
app.listen(PORT, () => {
  console.log(`App express is running in port: ${PORT}`);
});
