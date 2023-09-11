const express = require("express");
const Page = require("../models/page");

const router = express.Router();

router.post("/", async (req, res) => {
  const newPage = await Page.create(req.body);
  console.log(req.body);
  res.json(newPage);
});

router.get("/", async (req, res) => {
  const pages = await Page.find();
  res.json(pages);
});

router.get("/:id", async (req, res) => {
  const page = await Page.findById(req.params.id);
  res.json(page);
});

router.put("/:id", async (req, res) => {
  const page = await Page.findByIdAndUpdate(req.params.id, req.body);
  res.json(page);
});

router.delete("/:id", async (req, res) => {
  await Page.findByIdAndDelete(req.params.id);
  res.json("deleted");
});

module.exports = router;
