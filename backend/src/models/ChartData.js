const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  labels: {
    type: [String],
    required: true,
  },
  values: {
    type: [Number],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("ChartData", chartSchema);