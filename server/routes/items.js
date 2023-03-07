const express = require("express");
const router = express.Router();
const { Item } = require("../models/item");

// GET

//Express Route to GET all Items
router.get("/items", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

//Express Route to GET one Item
router.get("/items/:id", async (req, res, next) => {
    try {
      const item = await Item.findByPk(req.params.id);
      res.send(item);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;