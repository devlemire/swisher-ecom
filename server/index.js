// Server Dependencies
require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");
const path = require("path");
const v1Router = require("./routes/api/v1");
const morgan = require("morgan");

// Create an express server
const app = express();

// Environment Variables
const { SERVER_PORT, NODE_ENV } = process.env;

// Middleware for logging requests
app.use(morgan("dev"));

// Serve client assets
app.use(express.static(`${__dirname}/../client/build`));

// app.get("/api/v1/cars", (req, res, next) => res.status(200).send());

// Api Endpoints
app.use("/api/v1", v1Router);

// Send the React app since using Client side routing
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(`${__dirname}/../client/build/index.html`));
});

// Start server on specifed port
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port: ${SERVER_PORT}`);
  console.log(`Server running in env: ${NODE_ENV}`);
});
