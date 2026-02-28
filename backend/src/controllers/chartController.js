const ChartData = require("../models/ChartData");

exports.createChart = async (req, res) => {
  try {
    const { title, labels, values } = req.body;

    const newChart = new ChartData({ title, labels, values });
    await newChart.save();

    res.status(201).json(newChart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCharts = async (req, res) => {
  try {
    const charts = await ChartData.find();
    res.json(charts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteChart = async (req, res) => {
  try {
    await ChartData.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};