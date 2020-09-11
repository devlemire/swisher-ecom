const Router = require("express").Router();

// Controllers
const cars_controller = require("../../../controllers/cars_controller");

Router.get("/", cars_controller.getAllCars);
Router.get("/featured", cars_controller.getFeaturedCars);
Router.get("/nearYou", cars_controller.getNearYouCars);
Router.get("/hotDeal", cars_controller.getHotDealCars);

Router.get("/:carId", cars_controller.getCarById);

module.exports = Router;
