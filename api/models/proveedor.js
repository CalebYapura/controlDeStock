'use strict';
module.exports = (sequelize, DataTypes) => {
  const proveedor = sequelize.define('proveedor', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    celular: DataTypes.STRING
  }, {});
  proveedor.associate= function(models) {
    // associations can be defined here
      proveedor.hasMany(models.producto,{
        foreignKey: 'proveedorId', as: 'producto'
      });
  };
  return proveedor;
};
