const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  typeOfService: String,
  price: Number
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;