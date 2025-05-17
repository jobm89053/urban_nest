'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      login: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};