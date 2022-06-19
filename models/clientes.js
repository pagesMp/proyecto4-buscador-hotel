'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {

    static associate(models) {
      this.hasMany(models.Reserva, {foreignKey: 'clienteDni'});
    }

  };

  Cliente.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING
    },
    dni: {
     type: DataTypes.INTEGER,
     foreignKey: true
    },
    telefono: {
      type: DataTypes.INTEGER
    },
    email: {
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
    modelName: 'Cliente',
    tableName: 'clientes'
  }
  
  );
  
  return Cliente;

};