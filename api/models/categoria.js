'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoria = sequelize.define('categoria', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  categoria.associate = function(models) {
    console.log(models);
    // associations can be defined here
    categoria.hasMany(models.producto,{
      foreignKey:'idcategoria', as:'producto'
    });
  };
  return categoria;
};
