// models/Users.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/db');

const Users = sequelize.define('Users', {
  login: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255), // Увеличиваем длину для хэша
    allowNull: false,
  },
}, {
  tableName: 'users',
  hooks: {
    // Хэшируем пароль перед созданием пользователя
    beforeCreate: async (user) => {
      const saltRounds = 10; // Количество раундов хэширования
      user.password = await bcrypt.hash(user.password, saltRounds);
    },
    // Хэшируем пароль перед обновлением пользователя
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);
      }
    },
  },
});

// Метод для проверки пароля
Users.prototype.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = Users;

// models/Users.js
const Realtors = require('./Realtors');
const Clients = require('./Clients');

Users.hasOne(Realtors, { foreignKey: 'users_id_user' });
Realtors.belongsTo(Users, { foreignKey: 'users_id_user' });

Users.hasOne(Clients, { foreignKey: 'users_id_user' });
Clients.belongsTo(Users, { foreignKey: 'users_id_user' });