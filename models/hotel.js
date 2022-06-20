'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {

    static associate(models) {
      this.belongsTo(models.Reserva, {foreignKey: 'hotelId'});
    }

  };

  Hotel.init({

    // id: DataTypes.INTEGER,    
    type: DataTypes.STRING,    
    nombre:DataTypes.STRING     
  }, 
  
  {
    sequelize,
    modelName: 'Hotel',
    tableName: 'hotel'
  }
  
  );
  
  return Hotel;

};