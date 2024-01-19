// const { Pool } = require("pg");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Connect with PostgreSQL
// const db = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: 456654,
//   port: 5433,
// });

// Initialize Express app
const app = express();

// Middleware: Logging
app.use(morgan("dev"));

// Middleware: JSON and URL-encoded data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establishing API Routes
app.use("/api", require("./api"));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

// module.exports = { db };
