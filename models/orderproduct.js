"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderProduct.belongsTo(models.order); //'orderProduct' and 'order' class name
      orderProduct.belongsTo(models.product); //'orderProduct' and 'product' class name
    }
  }
  orderProduct.init(
    {
      orderId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "orderProduct",
    }
  );
  return orderProduct;
};
