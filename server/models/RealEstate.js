// models/RealEstate.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Type_of_re = require('./Type_of_re');

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
  city: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  type_of_re: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'RealEstate',
});

// Связи
RealEstate.belongsTo(Type_of_re, { foreignKey: 'type_of_re' });

module.exports = RealEstate;