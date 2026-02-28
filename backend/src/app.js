const express = require("express");
const cors = require("cors");
const chartRoutes = require("./routes/chartRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/charts", chartRoutes);

module.exports = app;