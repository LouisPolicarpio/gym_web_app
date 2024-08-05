

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name:'test1',
        age:10
      },
      {
        name:'test2',
        age:11
      },
      {
        name:'test3',
        age:12,
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
