'use strict';
module.exports = (sequelize, DataTypes) => {
  const producto = sequelize.define('producto', {
    nombreproducto: DataTypes.STRING,
    precioproducto: DataTypes.STRING,
    idcategoria: DataTypes.INTEGER,
    idproveedor: DataTypes.INTEGER
  }, {});
  producto.associate = function(models) {
    // associations can be defined here
    producto.belongsTo(models.categoria);
    producto.belongsTo(models.proveedor);

    producto.hasMany(models.pedido, {
      foreignKey: 'idproducto', as: 'pedido'
    });
  };
  return producto;
};
