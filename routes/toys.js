const express = require("express");
const Toy = require("../models/toy");

const router = express.Router();

router.post("/", async (req, res) => {
  const newToy = await Toy.create(req.body);
  res.json(newToy);
});

router.get("/", async (req, res) => {
  const toys = await Toy.find();
  res.json(toys);
});

router.get("/:id", async (req, res) => {
  const toy = await Toy.findById(req.params.id);
  res.json(toy);
});

router.put("/:id", async (req, res) => {
  const toy = await Toy.findByIdAndUpdate(req.params.id, req.body);
  res.json(toy);
});

router.delete("/:id", async (req, res) => {
  await Toy.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

module.exports = router;
