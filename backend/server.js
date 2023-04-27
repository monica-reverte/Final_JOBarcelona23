const express = require("express");
const app = express();

const teamsRoutes = require("./routes/teamsRoutes");
const PORT = 4000;

//!CONNECTION DB
const connect = require("./config/db");
connect();

app.use("/", teamsRoutes);
// app.use("/team", teamRoute);
// app.use("/players", playersRoutes);
app.listen(PORT, () => {
  console.log(`App express is running in port: ${PORT}`);
});
