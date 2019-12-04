'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categoria',
            schema: 'dbo'
          }
          , key: 'id'
        }
      },
      proveedorId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'proveedors',
            schema: 'dbo'
          }
          , key: 'id'
        }
      },
      nombreproducto: {
        type: Sequelize.STRING
      },
      precioproducto: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('productos');
  }
};
