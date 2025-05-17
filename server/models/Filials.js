// models/Filials.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Filials = sequelize.define('Filials', {
  filial_Name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'Filials',
});

module.exports = Filials;

// models/Filials.js
const Realtors = require('./Realtors');

Filials.hasMany(Realtors, { foreignKey: 'filial_ID' });
Realtors.belongsTo(Filials, { foreignKey: 'filial_ID' });