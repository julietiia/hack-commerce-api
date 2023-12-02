const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        description: {
          type: DataTypes.TEXT,
        },
        stock: {
          type: DataTypes.INTEGER,
        },
        image: {
          type: DataTypes.JSON,
        },
        highlight: {
          type: DataTypes.BOOLEAN,
        },
        categoryId: {
          type: DataTypes.BIGINT.UNSIGNED,
        }
       
      },
      {
        sequelize,
        modelName: "product",
      },
    );
    return Product;
  }
}

module.exports = Product;
