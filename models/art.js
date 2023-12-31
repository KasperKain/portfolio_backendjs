const mongoose = require("mongoose");

const ArtSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Art", ArtSchema);
