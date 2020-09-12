const sendError = require("../utils/sendError");

module.exports = (req, res, next) => {
  try {
    const { quantity } = req.body;

    if (quantity === undefined) {
      return res.status(400).send({ error: "No quantity provided" });
    }

    const numQuantity = Number(quantity);

    if (isNaN(numQuantity)) {
      return res.status(400).send({
        error:
          "Invalid type provided for quantity. Expected Number or String that can be converted to Number",
      });
    }

    if (numQuantity < 1 || numQuantity > 10) {
      return res.status(400).send({
        error:
          "The provided quanity was out of range. Please keep quantity between 1 and 10",
      });
    }

    next();
  } catch (err) {
    console.error("validate_quantity middleware failed:", err);
    sendError(err);
  }
};
