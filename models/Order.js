const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        products: {
          type: DataTypes.JSON,
        },
        state: {
          type: DataTypes.ENUM ("confirmed", "shipped", "delivered", "cancelled"),
          defaultValue: "confirmed",
        },
        date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: "order",
      },
    );
    return Order;
  }
}

module.exports = Order;
