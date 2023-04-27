const express = require("express");
const app = express();

const teamsRoutes = require("./routes/teamsRoutes");
const PORT = 4000;

app.use("/", teamsRoutes);
// app.use("/team", teamRoute);
// app.use("/players", playersRoutes);
app.listen(PORT, () => {
  console.log(`App express is running in port: ${PORT}`);
});
