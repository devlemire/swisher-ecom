const sendError = require("../utils/sendError");

module.exports = (req, res, next) => {
  try {
    if (req.params.carId === undefined) {
      return res.status(400).send({ error: "No carId provided" });
    }

    const { carId } = req.params;
    const numCarId = Number(carId);

    if (isNaN(numCarId)) {
      return res.status(400).send({
        error:
          "Invalid type provided for carId. Expected Number or String that can be converted to Number",
      });
    }

    next();
  } catch (err) {
    console.error("validate_carId middleware failed:", err);
    sendError(err, res);
  }
};
