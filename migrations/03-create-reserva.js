'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reserva', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      clienteDni: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clientes',
          key: 'dni'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      hotelId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'hotel',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      importeReserva: {
        type: Sequelize.INTEGER
      },
      fechaEntrada: {
        type: Sequelize.DATE
      },
      fechaSalida: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
        });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reserva');
  }
};