'use strict';
module.exports = (sequelize, DataTypes) => {
  const cliente = sequelize.define('cliente', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    celular: DataTypes.STRING
  }, {});
  cliente.associate = function(models) {
    // associations can be defined here
  };
  return cliente;
};