'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detallepedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaventa: {
        type: Sequelize.FLOAT
      },
      cantidad: {
        type: Sequelize.FLOAT
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'pedidos',
            schema: 'dbo'
          },
          key: 'id'
        }
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
    return queryInterface.dropTable('detallepedidos');
  }
};
