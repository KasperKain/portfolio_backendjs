const express = require("express");
const Game = require("../models/game");

const router = express.Router();

router.post("/", async (req, res) => {
  const newGame = await Game.create(req.body);
  res.json(newGame);
});

router.get("/", async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

router.get("/:id", async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
});

router.put("/:id", async (req, res) => {
  const game = await Game.findByIdAndUpdate(req.params.id, req.body);
  res.json(game);
});

router.delete("/:id", async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

module.exports = router;
