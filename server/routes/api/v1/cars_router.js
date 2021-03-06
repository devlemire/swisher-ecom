const Router = require("express").Router();

// Controllers
const cars_controller = require("../../../controllers/cars_controller");
// Middlewars
const validate_carId = require("../../../middlewares/validate_carId");

// /api/v1/cars

Router.get("/", cars_controller.getAllCars);
Router.get("/featured", cars_controller.getFeaturedCars);
Router.get("/nearYou", cars_controller.getNearYouCars);
Router.get("/hotDeal", cars_controller.getHotDealCars);
Router.get("/uniqueCarMakes", cars_controller.getUniqueListOfCarMake);

Router.get("/:carId", validate_carId, cars_controller.getCarById);

module.exports = Router;
