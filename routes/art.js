const express = require("express");
const Art = require("../models/art");

const router = express.Router();

router.post("/", async (req, res) => {
  const newArt = await Art.create(req.body);
  res.json(newArt);
});

router.get("/", async (req, res) => {
  const Arts = await Art.find();
  res.json(Arts);
});

router.get("/:id", async (req, res) => {
  const art = await Art.findById(req.params.id);
  res.json(art); // changed "Art" to "art"
});

router.put("/:id", async (req, res) => {
  const art = await Art.findByIdAndUpdate(req.params.id, req.body);
  res.json(art); // changed "Art" to "art"
});

router.delete("/:id", async (req, res) => {
  const art = await Art.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

module.exports = router;
