require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const webhookRoutes = require("./routes/webhookRoutes");

const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

// Security Middleware
app.use(helmet());

// Enable CORS
app.use(cors());

// Logger Middleware
app.use(morgan("dev"));

// Parse JSON
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

// Parse URL Encoded Data
app.use(express.urlencoded({ extended: true }));

// Health Route
app.get("/", (req, res) => {
  res.status(200).send("GitGuard AI Backend Running");
});

// API Routes
app.use("/api/webhook", webhookRoutes);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
