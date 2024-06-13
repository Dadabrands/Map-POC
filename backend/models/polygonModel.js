const mongoose = require("mongoose");

const polygonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coordinates: { type: Array, default: [] },
});

const Polygon = mongoose.model("Polygon", polygonSchema);
module.exports = Polygon;
