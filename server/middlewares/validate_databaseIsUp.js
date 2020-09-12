const cars = require("../data/cars.json");
const sendError = require("../utils/sendError");

module.exports = (req, res, next) => {
  try {
    if (!cars || !Array.isArray(cars) || cars.length === 0) {
      return res.status(500).send({ error: "Database is down" });
    }

    next();
  } catch (err) {
    console.error("validate_databasIsUp middleware failed:", err);
    sendError(err, res);
  }
};
