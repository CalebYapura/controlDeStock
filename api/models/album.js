'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    gestion: DataTypes.DATE,
    imagen: DataTypes.STRING,
    artistaId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};