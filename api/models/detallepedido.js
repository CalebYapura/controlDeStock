'use strict';
module.exports = (sequelize, DataTypes) => {
  const detallepedido = sequelize.define('detallepedido', {
    fechaventa: DataTypes.FLOAT,
    cantidad: DataTypes.FLOAT,
    idpedido: DataTypes.INTEGER
  }, {});
  detallepedido.associate = function(models) {
    // associations can be defined here
  };
  return detallepedido;
};