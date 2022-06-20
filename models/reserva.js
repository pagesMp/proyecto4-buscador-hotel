'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {

    static associate(models) {
      this.belongsTo(models.Cliente, {foreignKey: 'dni'});
      this.belongsTo(models.Hotel, {foreignKey: 'id'});
    }

  };

  Reserva.init({

    // id: DataTypes.INTEGER ,   
    type: DataTypes.STRING,    
    clienteDni: DataTypes.INTEGER,   
    hotelId: DataTypes.INTEGER,   
    importeReserva: DataTypes.INTEGER,    
    fechaEntrada: DataTypes.DATE,    
    fechaSalida: DataTypes.DATE  
     
  },
  
  {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reserva'
  }
  
  );
  
  return Reserva;

};