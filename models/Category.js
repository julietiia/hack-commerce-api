const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: DataTypes.TEXT,
        },
        images: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "category",
      },
    );
    return Category;
  }
}

module.exports = Category;