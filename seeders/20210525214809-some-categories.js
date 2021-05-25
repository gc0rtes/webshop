"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "books",
        description: "some good books",
        url: "https://s.s-bol.com/nl/upload/images/visual-categories/8299.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "eletronics",
        description: "some cool eletronics",
        url: "https://s.s-bol.com/nl/upload/images/visual-categories/3136.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "games",
        description: "best games ever!",
        url: "https://s.s-bol.com/nl/upload/images/visual-categories/3135.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
