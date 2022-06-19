'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotel', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotel');
  }
};