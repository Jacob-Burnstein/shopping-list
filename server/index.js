// // const express = require("express");
// const morgan = require("morgan");
// const next = require("next");
// require("dotenv").config();

// const PORT = process.env.PORT || 4000;
// // const dev = process.env.NODE_ENV !== "production";

// // Set up Next.js
// const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler();

// nextApp.prepare().then(() => {
//   // Set up Next.js API routes
//   // nextApp.all("/api/*", (req, res) => {
//   //   return handle(req, res);
//   // });
//   // Send all other routes to Next.js handling
//   nextApp.all("*", (req, res) => {
//     return handle(req, res);
//   });
//   // Start server
//   nextApp.listen(PORT, () => {
//     console.log(`Listening on port http://localhost:${PORT}`);
//   });
// });
