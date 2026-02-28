const express = require("express");
const router = express.Router();
const {
  createChart,
  getCharts,
  deleteChart,
} = require("../controllers/chartController");

router.post("/", createChart);
router.get("/", getCharts);
router.delete("/:id", deleteChart);

module.exports = router;