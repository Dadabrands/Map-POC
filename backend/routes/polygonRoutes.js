const express = require("express");
const {
  savePolygon,
  getPolygonById,
  getAllPolygons,
} = require("../controllers/polygonController");

const router = express.Router();

router.route("/").post(savePolygon);
router.route("/").get(getAllPolygons);
router.route("/:id").get(getPolygonById);

module.exports = router;
