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

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING
    },
    clienteDni: {
      type: DataTypes.INTEGER
    },
    hotelId:{
      type: DataTypes.INTEGER
    },
    importeReserva: {
      type: DataTypes.INTEGER
    },
    fechaEntrada: {
      type: DataTypes.DATE
    },
    fechaSalida: {
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    } 
  },
  
  {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reserva'
  }
  
  );
  
  return Reserva;

};