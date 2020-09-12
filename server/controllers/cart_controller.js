const sendError = require("../utils/sendError");
const cars = require("../data/cars.json");
const cloneDeep = require("lodash.clonedeep");

const generateFreshCart = () => ({
  total: Number(0).toFixed(2),
  inCartLookup: {},
  carsInCart: [],
  reRenderCarId: undefined,
});

function calculateTotal(cart) {
  return cart
    .reduce((total, next) => {
      return total + next.carPrice * next.quantity;
    }, 0)
    .toFixed(2);
}

exports.getSessionCart = (req, res, next) => {
  try {
    if (req.session.cart === undefined) {
      req.session.cart = generateFreshCart();
    }

    res.status(200).send(req.session.cart);
  } catch (err) {
    console.error("getSessionCart failed in cart_controller", err);
    sendError(err, res);
  }
};

exports.addToCart = (req, res, next) => {
  try {
    const { carId } = req.params;
    let { inCartLookup, carsInCart } = req.session.cart;

    const numCarId = Number(carId);
    const carObj = cars.find((carObj) => carObj.carId === numCarId);
    const carObjClone = cloneDeep(carObj);

    if (inCartLookup[carObjClone.carId]) {
      return res.status(400).send({ error: "The car is already in the cart" });
    }

    carObjClone.quantity = 1;
    inCartLookup[carObjClone.carId] = true;
    carsInCart.push(carObjClone);
    req.session.cart.total = calculateTotal(carsInCart);

    res.status(200).send(req.session.cart);
  } catch (err) {
    console.error("addToCart failed in cart_controller.js:", err);
    sendError(err, res);
  }
};

exports.removeFromCart = (req, res, next) => {
  try {
    const { carId } = req.params;
    let { inCartLookup, carsInCart } = req.session.cart;

    const numCarId = Number(carId);
    const carObj = cars.find((carObj) => carObj.carId === numCarId);
    const carObjClone = cloneDeep(carObj);

    if (!inCartLookup[carObjClone.carId]) {
      return res
        .status(400)
        .send({ error: "The car is already not in the cart" });
    }

    delete inCartLookup[carObjClone.carId];

    const inCartIndex = carsInCart.findIndex(
      (carObj) => carObj.carId === numCarId
    );

    carsInCart.splice(inCartIndex, 1);
    req.session.cart.total = calculateTotal(carsInCart);

    res.status(200).send(req.session.cart);
  } catch (err) {
    console.error("removeFromCart failed in cart_controller.js:", err);
    sendError(err, res);
  }
};

exports.updateQuantity = (req, res, next) => {
  try {
    const { carId } = req.params;
    const { quantity } = req.body;
    let { carsInCart } = req.session.cart;

    const numCarId = Number(carId);
    const carObj = carsInCart.find((carObj) => carObj.carId === numCarId);

    if (carObj === undefined) {
      return res.status(400).send({ error: "The car is not in the cart" });
    }

    carObj.quantity = Number(quantity);
    req.session.cart.total = calculateTotal(carsInCart);

    res.status(200).send(req.session.cart);
  } catch (err) {
    console.error("updateQuantity failed in cart_controller.js:", err);
    sendError(err, res);
  }
};

exports.checkout = (req, res, next) => {
  try {
    req.session.cart = generateFreshCart();
    res.status(200).send(req.session.cart);
  } catch (err) {
    console.error("checkout failed in cart_controller.js", err);
    sendError(err, res);
  }
};
