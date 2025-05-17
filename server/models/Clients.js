// models/Clients.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Clients = sequelize.define('Clients', {
  cl_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'Clients',
});

module.exports = Clients;

// models/Clients.js
const Contract = require('./Contract');

Clients.hasMany(Contract, { foreignKey: 'clients_ID' });
Contract.belongsTo(Clients, { foreignKey: 'clients_ID' });

// models/Realtors.js
const Contract = require('./Contract');

Realtors.hasMany(Contract, { foreignKey: 'realtorID' });
Contract.belongsTo(Realtors, { foreignKey: 'realtorID' });

// models/RealEstate.js
const Contract = require('./Contract');

RealEstate.hasMany(Contract, { foreignKey: 'real_estate_ID' });
Contract.belongsTo(RealEstate, { foreignKey: 'real_estate_ID' });