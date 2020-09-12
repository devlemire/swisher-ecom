const Router = require("express").Router();

// Controllers
const cart_controller = require("../../../controllers/cart_controller");
// Middlewars
const validate_carId = require("../../../middlewares/validate_carId");
const validate_carExists = require("../../../middlewares/validate_carExists");
const validate_hasCart = require("../../../middlewares/validate_hasCart");
const validate_quantity = require("../../../middlewares/validate_quantity");

// /api/v1/cart

Router.get("/", cart_controller.getSessionCart);

Router.post("/checkout", validate_hasCart, cart_controller.checkout);

Router.post(
  "/add/:carId",
  validate_hasCart,
  validate_carId,
  validate_carExists,
  cart_controller.addToCart
);

Router.delete(
  "/remove/:carId",
  validate_hasCart,
  validate_carId,
  validate_carExists,
  cart_controller.removeFromCart
);

Router.put(
  "/update/quantity/:carId",
  validate_hasCart,
  validate_quantity,
  validate_carId,
  validate_carExists,
  cart_controller.updateQuantity
);

module.exports = Router;
