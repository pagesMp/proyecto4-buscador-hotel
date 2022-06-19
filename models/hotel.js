'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {

    static associate(models) {
      this.belongsTo(models.Reserva, {foreignKey: 'hotelId'});
    }

  };

  Hotel.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      type:DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING
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
    modelName: 'Hotel',
    tableName: 'hotel'
  }
  
  );
  
  return Hotel;

};