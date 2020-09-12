const cars = require("../data/cars.json");
const sendError = require("../utils/sendError");

exports.getAllCars = (req, res, next) => {
  res.status(200).send(cars);
};

exports.getFeaturedCars = (req, res, next) => {
  try {
    const featuredCars = cars.filter((carObj) => !!carObj.featured);
    res.status(200).send(featuredCars);
  } catch (err) {
    console.error("getFeaturedCars failed in cars_controller", err);
    sendError(err, res);
  }
};

exports.getNearYouCars = (req, res, next) => {
  try {
    const nearYouCars = cars.filter((carObj) => !!carObj.nearYou);
    res.status(200).send(nearYouCars);
  } catch (err) {
    console.error("getNearYouCars failed in cars_controller:", err);
    sendError(err, res);
  }
};

exports.getHotDealCars = (req, res, next) => {
  try {
    const hotDealCars = cars.filter((carObj) => !!carObj.hotDeal);
    res.status(200).send(hotDealCars);
  } catch (err) {
    console.error("getHotDealCars failed in cars_controller:", err);
    sendError(err, res);
  }
};

exports.getCarById = (req, res, next) => {
  try {
    const { carId } = req.params;
    const numCarId = Number(carId);
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

exports.getUniqueListOfCarMake = (req, res, next) => {
  try {
    const uniqueCarMakes = {};

    cars.forEach((carObj) => {
      if (!uniqueCarMakes[carObj.carMake]) {
        uniqueCarMakes[carObj.carMake] = {
          cars: [],
        };
      }

      uniqueCarMakes[carObj.carMake].cars.push(carObj);
    });

    res.status(200).send(uniqueCarMakes);
  } catch (err) {
    console.error("getUniqueListOfCarMake failed in cars_controller:", err);
    return sendError(err, res);
  }
};
