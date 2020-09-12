module.exports = (err, res) => {
  res.status(500).send({ error: err.toString ? err.toString() : err });
};
