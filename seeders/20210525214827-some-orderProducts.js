"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("orderProducts", [
      {
        orderId: 1,
        productId: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 7,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 6,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 5,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 5,
        productId: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 6,
        productId: 4,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderProducts", null, {});
  },
};
