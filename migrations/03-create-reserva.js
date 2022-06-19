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
        // references: {
        //   model: 'Cliente',
        //   key: 'dni'
        // }
      },
      hotelId:{
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Hotel',
        //   key: 'id'
        // }
      },
      importeReserva: {
        type: Sequelize.INTEGER
      },
      fechaEntrada: {
        type: Sequelize.DATE
      },
      fechaSalida: {
        type: Sequelize.DATE
      }
        });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reserva');
  }
};