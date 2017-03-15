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
    
    var postCount = 30;
    var posts = [];
   
    for(var i = 0; i <= postCount; i++) {
      posts.push({
        title: chance.sentence(),
        body: chance.paragraph(),
        published_date: chance.date(),
        published: true,
        user_id: Math.floor((Math.random() * 10) + 1),
        createdAt: new Date,
        updatedAt: new Date
      });
    }

    return queryInterface.bulkInsert('posts', posts);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('posts', null, {});
  }
};
