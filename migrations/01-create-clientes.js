'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
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
      },
      dni: {
        type: Sequelize.INTEGER,
        unique: true
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};