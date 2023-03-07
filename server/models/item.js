const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db');

const Item = sequelize.define('item', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.NUMBER,
  category: DataTypes.STRING,
  image: DataTypes.STRING
});

module.exports = {Item}