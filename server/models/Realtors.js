// models/Realtors.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Filials = require('./Filials');
const Users = require('./Users');

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
  filial_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  users_id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Realtors',
});

// Связи
Realtors.belongsTo(Filials, { foreignKey: 'filial_ID' });
Realtors.belongsTo(Users, { foreignKey: 'users_id_user' });

module.exports = Realtors;