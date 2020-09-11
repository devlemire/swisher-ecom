const cars = require("../data/cars.json");

const databaseDown = () => !cars || !Array.isArray(cars) || cars.length === 0;
const sendError = (err, res) => {
  res.status(500).send({ error: err.toString ? err.toString() : err });
};

exports.getAllCars = (req, res, next) => {
  if (databaseDown()) {
    return sendError("Cars database is down", res);
  }

  res.status(200).send(cars);
};

exports.getFeaturedCars = (req, res, next) => {
  try {
    if (databaseDown()) {
      return sendError("Cars database is down", res);
    }

    const featuredCars = cars.filter((carObj) => !!carObj.featured);
    res.status(200).send(featuredCars);
  } catch (err) {
    console.error("getFeaturedCars failed in cars_controller", err);
    sendError(err, res);
  }
};

exports.getNearYouCars = (req, res, next) => {
  try {
    if (databaseDown()) {
      return sendError("Cars database is down", res);
    }

    const nearYouCars = cars.filter((carObj) => !!carObj.nearYou);
    res.status(200).send(nearYouCars);
  } catch (err) {
    console.error("getNearYouCars failed in cars_controller:", err);
    sendError(err, res);
  }
};

exports.getHotDealCars = (req, res, next) => {
  try {
    if (databaseDown()) {
      return sendError("Cars database is down", res);
    }

    const hotDealCars = cars.filter((carObj) => !!carObj.hotDeal);
    res.status(200).send(hotDealCars);
  } catch (err) {
    console.error("getHotDealCars failed in cars_controller:", err);
    sendError(err, res);
  }
};

exports.getCarById = (req, res, next) => {
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

    const foundCarObj = cars.find((carObj) => carObj.carId === numCarId);

    if (foundCarObj === undefined) {
      res
        .status(502)
        .send({ error: "No car was found with the provided carId" });
    } else {
      res.status(200).send(foundCarObj);
    }
  } catch (err) {
    console.error("getCarById failed in cars_controller:", err);
    return sendError(err, res);
  }
};
