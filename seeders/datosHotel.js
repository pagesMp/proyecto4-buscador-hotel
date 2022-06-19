'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('hotel', [{
        id: 1,
        nombre: "Hotel Briteiros"
      }, {
        id: 2,
        nombre: "Hotel Cha-am"
      }, {
        id: 3,
        nombre: "Hotel Cibugel"
      }, {
        id: 4,
        nombre: "Hotel Shuiyang"
      }, {
        id: 5,
        nombre: "Hotel Camlachie"
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('hotel', null, {});
     
  }
};