const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db');

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
});

module.exports = {User}