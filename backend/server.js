const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 3000;
// dotenv.config({ path: "./config.env" });

const DB = process.env.MONGO_URI;
mongoose.connect(DB).then(() => {
  console.log("DB connection successful");
});
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
// we would have other stuuf in here that's not related to
// handling unhandles rejections
process.on("unhandleRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down.....");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down.....");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
