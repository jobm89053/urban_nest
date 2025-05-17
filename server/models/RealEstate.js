// models/RealEstate.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RealEstate = sequelize.define('RealEstate', {
  price: {
    type: DataTypes.DECIMAL(7, 2),
    allowNull: false,
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  agency_commission: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'RealEstate',
});

module.exports = RealEstate;