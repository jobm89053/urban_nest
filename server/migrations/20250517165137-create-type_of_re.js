// migrations/20231001120006-create-type-of-re.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Type_of_re', {
      type_of_re: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Type_of_re');
  },
};