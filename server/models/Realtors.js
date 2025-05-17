// models/Realtors.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Realtors = sequelize.define('Realtors', {
  r_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'Realtors',
});

module.exports = Realtors;