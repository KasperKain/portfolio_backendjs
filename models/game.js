const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  live: { type: String, required: false },
  github: { type: String, required: false },
  skills: { type: [String], required: true },
});

module.exports = mongoose.model("Game", GameSchema);
