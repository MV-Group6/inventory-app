const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db');

const Cart = sequelize.define('cart', {
    userID: DataTypes.NUMBER,
    itemID: DataTypes.NUMBER
});

module.exports = {Cart}