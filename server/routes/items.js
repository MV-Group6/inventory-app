const express = require("express");
const router = express.Router();
const { Item } = require("../models/item");

//Express Route to GET all Items
router.get("/items", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
})

router.post("/items", async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body)
    res.status(200).send({newItem})
} catch (error) {
  console.log(error)
  res.status(500).json({ error: 'Unable to create restaurant'})
}
})

//Express Route to GET one Item
router.get("/items/:id", async (req, res, next) => {
    try {
      const item = await Item.findByPk(req.params.id);
      res.send(item);
    } catch (error) {
      next(error);
    }
})

module.exports = router;