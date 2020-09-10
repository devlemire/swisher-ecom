const Router = require("express").Router();

// Routers
const cars_router = require("./cars_router");

Router.use("/cars", cars_router);

module.exports = Router;
