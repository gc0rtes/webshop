"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.user); // 'user' and 'order' class name
      order.belongsToMany(models.product, {
        through: "orderProducts", // table's name here tricky!
      });
    }
  }
  order.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
