const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  live: { type: String, required: false },
  github: { type: String, required: false },
  image1: { type: String, required: true },
  image2: { type: String, required: true },
});

module.exports = mongoose.model("Page", PageSchema);
