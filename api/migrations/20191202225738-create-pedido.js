'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pedidos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            precioventa: {
                type: Sequelize.FLOAT
            },
            productoId: {
                type: Sequelize.INTEGER,
                references: {

                   model: {
                       tableName: 'productos',
                       schema: 'dbo'
                   },
                   key: 'id'
                }
            },
            clienteId: {
                type: Sequelize.INTEGER,

              references: {
                  model: {
                    tableName: 'clientes',
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
        return queryInterface.dropTable('pedidos');
    }
};
