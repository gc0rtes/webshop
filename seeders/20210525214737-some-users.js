//Import/require bcrypt algorithm. This is use to 'hash' the password on DB
const bcrypt = require("bcrypt");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        fullName: "Lyndsay Candlish",
        email: "lcandlish0@addtoany.com",
        password: bcrypt.hashSync("VudLuWJfmGs", 10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Kellyann Gubbins",
        email: "kgubbins1@imdb.com",
        password: bcrypt.hashSync("aTHE7VM", 10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Trey Klimowski",
        email: "tklimowski2@patch.com",
        password: bcrypt.hashSync("9EDzyxXH", 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Beverie Gregorio",
        email: "bgregorio3@epa.gov",
        password: bcrypt.hashSync("ASrxWwwW8UrT", 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Goldi Kubach",
        email: "gkubach4@boston.com",
        password: bcrypt.hashSync("KjefTcjfUh", 10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
