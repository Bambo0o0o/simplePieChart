const express = require("express");
const cors = require("cors");
const chartRoutes = require("./routes/chartRoutes");

const app = express();

// Original Setup
// app.use(cors());

// To checking cores backend
const cors = require("cors");

app.use(cors({
  origin: "https://your-vercel-project.vercel.app"
}));


app.use(express.json());

app.use("/api/v1/charts", chartRoutes);

module.exports = app;