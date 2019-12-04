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
            nombreproducto: {
                type: Sequelize.STRING
            },
            precioproducto: {
                type: Sequelize.STRING
            },
            idcategoria: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'categoria',
                    key: 'id'
                }
            },
            idproveedor: {
                type: Sequelize.INTEGER,
                references: {
                    // model: 'proveedor',
                    // key: 'id'
                    model: {
                        tableName: 'proveedors',
                        schema: 'dbo'
                    }
                    , key: 'id'
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
        return queryInterface.dropTable('productos');
    }
};
