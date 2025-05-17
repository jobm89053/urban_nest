// models/Type_of_re.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Type_of_re = sequelize.define('Type_of_re', {
  type_of_re: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'Type_of_re',
});

module.exports = Type_of_re;