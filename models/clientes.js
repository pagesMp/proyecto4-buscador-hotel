'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {

    static associate(models) {
      this.hasMany(models.Reserva, {foreignKey: 'clienteDni'});
    }

  };

  Cliente.init({

    // id: DataTypes.INTEGER,    
    type: DataTypes.STRING,
    nombre: DataTypes.STRING,    
    dni: DataTypes.INTEGER,    
    telefono: DataTypes.INTEGER,    
    email:DataTypes.STRING
  }, 
  
  {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes'
  }
  
  );
  
  return Cliente;

};