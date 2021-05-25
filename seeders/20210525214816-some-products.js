"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "The things you only see if you take the time",
        price: 15.99,
        url: "https://media.s-bol.com/qx19zQBB5lJr/145x210.jpg",
        catId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The boy, the mole, the fox and the horse",
        price: 20,
        url: "https://media.s-bol.com/mEqZkZYpYwwE/162x210.jpg",
        catId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kettle - With temperature control - 1.7 liters ",
        price: 35.95,
        url: "https://media.s-bol.com/7Av3ZOgk452j/168x206.jpg",
        catId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Krups Nespresso Essenza Mini XN1108 ",
        price: 74.99,
        url: "https://media.s-bol.com/gJYRzlZwEPrD/125x210.jpg",
        catId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Philips Airfryer XXL HD9650",
        price: 199.89,
        url: "https://media.s-bol.com/Nk9goMVoyy6D/168x167.jpg",
        catId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mario Kart 8 Deluxe - Nintendo Switch",
        price: 47.95,
        url: "https://media.s-bol.com/ZWvXmJrX2p22/129x210.jpg",
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ring Fit Adventure - Switch",
        price: 64.95,
        url: "https://media.s-bol.com/KQPYQ97lvNzl/8q9zgGm/168x192.jpg",
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
