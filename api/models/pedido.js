'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedido = sequelize.define('pedido', {
    precioventa: DataTypes.FLOAT,
    idproducto: DataTypes.INTEGER,
    idcliente: DataTypes.INTEGER
  }, {});
  pedido.associate = function(models) {
    // associations can be defined here
  };
  return pedido;
};