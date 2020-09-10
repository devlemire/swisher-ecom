const cars = require("../data/cars.json");

exports.getAllCars = (req, res, next) => {
  res.status(200).send(cars);
};

exports.getFeaturedCars = (req, res, next) => {
  const featuredCars = cars.filter((carObj) => !!carObj.featured);
  res.status(200).send(featuredCars);
};

exports.getNearYouCars = (req, res, next) => {
  const nearYouCars = cars.filter((carObj) => !!carObj.nearYou);
  res.status(200).send(nearYouCars);
};

exports.getHotDealCars = (req, res, next) => {
  const hotDealCars = cars.filter((carObj) => !!carObj.hotDeal);
  res.status(200).send(hotDealCars);
};
