const mongoose = require("mongoose");

const ToySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  live: { type: String, required: false },
  github: { type: String, required: false },
});

module.exports = mongoose.model("Toy", ToySchema);
