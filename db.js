const mongoose = require("mongoose");
require("dotenv").config();
// const mongoURL = "mongodb://localhost:27017/users";
const mongoURL = process.env.MONGOURL;

//setup mongodb connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// creating event listner

db.on("connected", () => {
  console.log("connected to database");
});
db.on("disconnected", () => {
  console.log("disconnected to database");
});

db.on("error", (err) => {
  console.log("Error: ", err);
});
