'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedido = sequelize.define('pedido', {
    precioventa: DataTypes.FLOAT,
    productoId: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER
  }, {});
  pedido.associate = function(models) {
    // associations can be defined here
    pedido.belongsTo(models.producto);
    pedido.belongsTo(models.cliente);

     pedido.hasMany(models.detallepedido,{
      foreignKey: 'pedidoId', as: 'detallepedido'
     })
  };
  return pedido;
};
