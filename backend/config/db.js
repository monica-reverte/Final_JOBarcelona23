const mongoose = require("mongoose");

const DB_URL = "mongodb://10.227.11.254:27017/hackathon";
const connect = async () => {
  return await mongoose
    .connect(DB_URL)
    .then(() => console.log("Connected to the server successfully"))
    .catch((err) =>
      console.log(
        `Cannot connect to server please checkout your connection: ${err}`
      )
    );
};

module.exports = connect;
