// models/City.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const City = sequelize.define('City', {
  city: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'City',
});

module.exports = City;

// models/City.js
const RealEstate = require('./RealEstate');

City.hasMany(RealEstate, { foreignKey: 'city' });
RealEstate.belongsTo(City, { foreignKey: 'city' });