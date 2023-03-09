const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db');

const Order = sequelize.define('order', {
  items: DataTypes.ARRAY
});

module.exports = {Order}