'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('reserva',  [{
    id: 1,
    clienteDni: 77116488,
    hotelId: 4,
    importeReserva: 396.92,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 2,
    clienteDni: 38231889,
    hotelId: 2,
    importeReserva: 170.82,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 3,
    clienteDni: 16616671,
    hotelId: 3,
    importeReserva: 369.61,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 4,
    clienteDni: 30636990,
    hotelId: 5,
    importeReserva: 344.15,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 5,
    clienteDni: 72441178,
    hotelId: 3,
    importeReserva: 112.27,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 6,
    clienteDni: 46635702,
    hotelId: 4,
    importeReserva: 297.01,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 7,
    clienteDni: 59341971,
    hotelId: 1,
    importeReserva: 349.68,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 8,
    clienteDni: 51665510,
    hotelId: 1,
    importeReserva: 230.69,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 9,
    clienteDni: 33534762,
    hotelId: 2,
    importeReserva: 65.07,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }, {
    id: 10,
    clienteDni: 28206671,
    hotelId: 2,
    importeReserva: 267.51,
    fechaEntrada: new Date(),
    fechaSalida: new Date()
  }],{});

},
  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('reserva', null, {});
     
  }
};