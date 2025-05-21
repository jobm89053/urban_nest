// migrations/20231001120003-create-realtors.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Realtors', {
      realtor_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      r_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      salary: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      filial_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      users_id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Realtors');
  },
};