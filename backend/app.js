const express = require("express");
const cors = require("cors");
const AppError = require("./utils/appError");
const polygonRouter = require("./routes/polygonRoutes");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/polygon", polygonRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
