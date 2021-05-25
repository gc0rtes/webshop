"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.hasMany(models.product, { foreignKey: "catId" }); // 'category' and 'product' class name
    }
  }
  category.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};
