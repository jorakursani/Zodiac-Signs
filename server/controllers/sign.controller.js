const Sign = require("../models/sign.model");

module.exports = {
  getSigns: (req, res) => {
    Sign.find({})
      .collation({ locale: "en" })
      .sort({ name: 1 })
      .then((signs) => {
        res.json(signs);
      })
      .catch((err) => {
        console.log("ERROR IN Get all", err);
        res.status(400).json({
          message: "something went wrong in finding all signs",
          error: err,
        });
      });
  },
  getSignById: (req, res) => {
    Sign.findOne({ _id: req.params.id })
      .then((sign) => {
        res.json(sign);
      })
      .catch((err) => {
        console.log("ERROR IN Get Sign", err);
        res.status(400).json({
          message: "something went wrong in finding the sign",
          error: err,
        });
      });
  },
  createSign: (req, res) => {
    Sign.create(req.body)
      .then((newSign) => {
        res.status(201).json(newSign);
      })
      .catch((err) => {
        console.log("ERROR IN create sign", err);
        res.status(400).json({
          message: "something went wrong in creating the sign",
          err,
        });
      });
  },
  updateSign: (req, res) => {
    Sign.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((sign) => {
        res.json(sign);
      })
      .catch((err) => {
        console.log("ERROR IN update sign", err);
        res.status(400).json({
          message: "something went wrong in updating the sign",
          errors: err.errors,
        });
      });
  },
  deleteSign: (req, res) => {
    Sign.deleteOne({ _id: req.params.id })
      .then((sign) => {
        res.json(sign);
      })
      .catch((err) => {
        console.log("ERROR IN delete sign", err);
        res.status(400).json({
          message: "something went wrong in deleting the sign",
          error: err,
        });
      });
  },
};
