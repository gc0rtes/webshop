"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.category, { foreignKey: "catId" }); // 'category' and 'product' class name
      product.belongsToMany(models.order, {
        through: "orderProducts", // table's name here tricky!
      });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      url: DataTypes.STRING,
      catId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
