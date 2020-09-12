const sendError = require("../utils/sendError");
const cars = require("../data/cars.json");

module.exports = (req, res, next) => {
  try {
    const { carId } = req.params;
    const numCarId = Number(carId);

    const foundCarObj = cars.find((carObj) => carObj.carId === numCarId);

    if (foundCarObj === undefined) {
      return res
        .status(502)
        .send({ error: "No car was found with the provided carId" });
    }

    next();
  } catch (err) {
    console.error("validate_carExists middleware failed:", err);
    sendError(err, res);
  }
};
