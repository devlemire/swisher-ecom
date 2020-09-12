const Router = require("express").Router();

// Routers
const cars_router = require("./cars_router");
const cart_router = require("./cart_router");

// Middlewars
const validate_databaseIsUp = require("../../../middlewares/validate_databaseIsUp");

Router.use("/cars", validate_databaseIsUp, cars_router);
Router.use("/cart", validate_databaseIsUp, cart_router);

module.exports = Router;
