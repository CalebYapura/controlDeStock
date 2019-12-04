'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoria = sequelize.define('categoria', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  categoria.associate = function(models) {
    // associations can be defined here
       categoria.hasMany(models.producto,{
      foreignKey: 'categoriaId',
    });
  };
  return categoria;
};
