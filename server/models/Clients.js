// models/Clients.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Users = require('./Users');

const Clients = sequelize.define('Clients', {
  cl_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  cl_fname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(2),
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
  users_id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Clients',
});

// Связи
Clients.belongsTo(Users, { foreignKey: 'users_id_user' });

module.exports = Clients;