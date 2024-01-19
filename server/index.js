const express = require("express");
const morgan = require("morgan");
const next = require("next");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== "production";

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

// Set up Next.js
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start Express server
  app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
  });
});

// module.exports = { db };
