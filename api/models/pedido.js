'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedido = sequelize.define('pedido', {
    precioventa: DataTypes.FLOAT,
    idproducto: DataTypes.INTEGER,
    idcliente: DataTypes.INTEGER
  }, {});
  pedido.associate = function(models) {
    // associations can be defined here
    pedido.belongsTo(models.producto);
    pedido.belongsTo(models.cliente);

     pedido.hasMany(models.detallepedido,{
      foreignKey: 'idpedido', as: 'detallepedido'
     })
  };
  return pedido;
};
