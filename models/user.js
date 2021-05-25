"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.order); // 'user' and 'order' class name
    }
  }
  user.init(
    {
      fullName: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
