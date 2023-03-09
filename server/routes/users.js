const express = require("express");
const router = express.Router();
const {User} = require("../models/User")

//Express Route to GET all Users
router.get("/users", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (error) {
      next(error);
    }
  })

//Express Route to GET one User
router.get("/users/:id", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.send(user);
    } catch (error) {
      next(error);
    }
})
//Express route to CREATE a User
router.post("/users", async (req, res, next) => {
    try {
      const newUser = await User.create(req.body)
      res.status(200).send({newUser})
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Unable to create user :('})
  }
  })

module.exports = router;