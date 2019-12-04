'use strict';
module.exports = (sequelize, DataTypes) => {
  const producto = sequelize.define('producto', {
    categoriaId: DataTypes.INTEGER,
    proveedorId: DataTypes.INTEGER,
    nombreproducto: DataTypes.STRING,
    precioproducto: DataTypes.FLOAT
  }, {});
  producto.associate = function(models) {
    // associations can be defined here
    console.log(models.categoria.attribute);
    // producto.belongsTo(models.categoria);
    // producto.belongsTo(models.categoria);
    producto.belongsTo(models.categoria,{
      foreignKey: 'categoriaId'
    });
    producto.belongsTo(models.proveedor);

    producto.hasMany(models.pedido, {
      foreignKey: 'productoId', as: 'pedido'
    });
  };
  return producto;
};
