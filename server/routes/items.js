const express = require("express");
const router = express.Router();
const { Item } = require("../models/item");

// GET /sauce
router.get("/items", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;