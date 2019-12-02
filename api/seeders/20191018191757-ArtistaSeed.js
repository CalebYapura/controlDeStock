'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('Artista', [{
                nombre: 'John',
                descripcion: 'Doe',
                imagen: 'demo@demo.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre: 'Carlos',
                descripcion: 'hola mundo',
                imagen: 'demo@demo.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }



        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Artista', null, {});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};