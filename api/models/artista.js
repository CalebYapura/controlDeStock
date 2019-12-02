'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artista = sequelize.define('Artista', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {});
  Artista.associate = function(models) {
    // associations can be defined here
  };
  return Artista;
};