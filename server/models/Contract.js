// models/Contract.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Clients = require('./Clients');
const RealEstate = require('./RealEstate');
const Realtors = require('./Realtors');

const Contract = sequelize.define('Contract', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  clients_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  real_estate_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  realtorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Contract',
});

// Связи
Contract.belongsTo(Clients, { foreignKey: 'clients_ID' });
Contract.belongsTo(RealEstate, { foreignKey: 'real_estate_ID' });
Contract.belongsTo(Realtors, { foreignKey: 'realtorID' });

module.exports = Contract;