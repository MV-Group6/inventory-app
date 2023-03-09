const express = require("express");
const router = express.Router();
const {Cart} = require("../models/Cart")

router.get("/carts", async (req, res, next) => {
    try {
      const carts = await Cart.findAll();
      res.send(carts);
    } catch (error) {
      next(error);
    }
})

router.get("/carts/:id", async (req, res, next) => {
    try {
      const cartItem = await Cart.findByPk(req.params.id);
      res.send(cartItem);
    } catch (error) {
      next(error);
    }
})

//Express route to CREATE a cart
router.post("/carts", async (req, res, next) => {
    try {
      const newCart = await Cart.create(req.body)
      res.status(200).send({newCart})
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Unable to create cart :('})
  }
  })
module.exports = router