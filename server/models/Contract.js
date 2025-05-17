// models/Contract.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Contract = sequelize.define('Contract', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Contract',
});

module.exports = Contract;