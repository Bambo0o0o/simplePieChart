const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const chartRoutes = require("./routes/chartRoutes");

const app = express();

// 0️⃣ ถ้า deploy บน Render / Railway / VPS
// app.set("trust proxy", 1);

// 1️⃣ Security headers FIRST
app.use(helmet());
// Original Setup
// app.use(cors());

// To checking cores backend
// app.use(cors({
//   origin: "https://simple-pie-chart.vercel.app"
// }));
// 2️⃣ CORS
// Fully cors backend
const allowedOrigins = [
  "https://simple-pie-chart.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

// 3️⃣ Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// 4️⃣ Body parser
app.use(express.json());

// 5️⃣ Routes
app.use("/api/v1/charts", chartRoutes);



module.exports = app;