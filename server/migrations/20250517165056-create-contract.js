// migrations/20231001120007-create-contract.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contract', {
      contract_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      clients_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      real_estate_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      realtorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Contract');
  },
};