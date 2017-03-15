'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var Chance = require('chance');
    var chance = new Chance;
    
    var userCount = 10;
    var users = [];
   
    for(var i = 0; i <= userCount; i++) {
      users.push({
        first_name: chance.first(),
        last_name: chance.last(),
        email: chance.email(),
        active: true,
        password_digest: 'testing',
        bio: chance.paragraph(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }

    return queryInterface.bulkInsert('users', users);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
