// migrations/20231001120005-create-real-estate.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RealEstate', {
      real_estate_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      price: {
        type: Sequelize.DECIMAL(7, 2),
        allowNull: false,
      },
      area: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      agency_commission: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      type_of_re: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RealEstate');
  },
};