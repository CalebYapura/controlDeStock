'use strict';
module.exports = (sequelize, DataTypes) => {
  const detallepedido = sequelize.define('detallepedido', {
    fechaventa: DataTypes.FLOAT,
    cantidad: DataTypes.FLOAT,
    pedidoId: DataTypes.INTEGER
  }, {});
  detallepedido.associate = function(models) {
    // associations can be defined here
    detallepedido.belongsTo(models.pedido);
  };
  return detallepedido;
};
