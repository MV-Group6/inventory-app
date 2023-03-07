const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
const {Item} = require("./item")

module.exports = {
  db: sequelize,
  Item
};
