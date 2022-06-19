'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('clientes', [{

        id: 1,
        nombre: "Britt",
        dni: 77116488,
        email: "bhardacre0@opera.com",
        telefono: 662430308
      }, {
        id: 2,
        nombre: "Merralee",
        dni: 38231889,
        email: "mbeininck1@geocities.com",
        telefono: 617435945
      }, {
        id: 3,
        nombre: "Adriano",
        dni: 16616671,
        email: "aash2@amazon.co.jp",
        telefono: 643587341
      }, {
        id: 4,
        nombre: "Ollie",
        dni: 28206671,
        email: "oupshall3@eventbrite.com",
        telefono: 677400155
      }, {
        id: 5,
        nombre: "Magdalena",
        dni: 33534762,
        email: "mscipsey4@slideshare.net",
        telefono: 672658489
      }, {
        id: 6,
        nombre: "Shea",
        dni: 51665510,
        email: "swallerbridge5@lulu.com",
        telefono: 652416460
      }, {
        id: 7,
        nombre: "Aloisia",
        dni: 59341971,
        email: "acorrea6@biblegateway.com",
        telefono: 676572782
      }, {
        id: 8,
        nombre: "Bobbie",
        dni: 46635702,
        email: "bpentony7@ning.com",
        telefono: 664410853
      }, {
        id: 9,
        nombre: "Tabor",
        dni: 72441178,
        email: "tbondesen8@npr.org",
        telefono: 631715776
      }, {
        id: 10,
        nombre: "Karylin",
        dni: 30636990,
        email: "kgodding9@npr.org",
        telefono: 665567553
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('clientes', null, {});
     
  }
};