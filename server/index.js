// Server Dependencies
require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");
const path = require("path");

// Create an express server
const app = express();

// Environment Variables
const { SERVER_PORT, NODE_ENV } = process.env;

// Serve client assets
app.use(express.static(`${__dirname}/../client/build`));
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(`${__dirname}/../client/build/index.html`));
});

// Start server on specifed port
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port: ${SERVER_PORT}`);
  console.log(`Server running in env: ${NODE_ENV}`);
});
