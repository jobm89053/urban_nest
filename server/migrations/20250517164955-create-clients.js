// migrations/20231001120004-create-clients.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      clients_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cl_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cl_fname: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      users_id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
  },
};