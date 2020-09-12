const sendError = require("../utils/sendError");

module.exports = (req, res, next) => {
  try {
    if (req.session.cart === undefined) {
      return res
        .status(500)
        .send({ error: "The cart has not been intialized yet" });
    }

    next();
  } catch (err) {
    console.error("validate_hasCart middleware failed:", err);
    sendError(err, res);
  }
};
