// migrations/20231001120000-create-city.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('City', {
      city: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('City');
  },
};