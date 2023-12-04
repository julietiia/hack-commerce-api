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
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.TEXT,
        },
        image: {
          type: DataTypes.STRING,
        },
        code: {
          type: DataTypes.INTEGER,
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
