const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");

const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use(routes);

// Connect to MongoDB and start server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
});
