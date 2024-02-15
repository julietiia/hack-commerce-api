const { Sequelize } = require("sequelize");

// ORIGINAL
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: "postgres",
    dialectModule:require("pg"), // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_NAME, // Asegúrate de que DB_CONNECTION sea "postgres"
//     logging: false,
//   }
// )


// PRUEBA 
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD, // Ej: root
//   process.env.DB_PORT,

//   {
//     host: process.env.DB_HOST, // Ej: 127.0.0.1
//     dialect: 'postgres',
//     dialectModule:require("pg"), // Ej: mysql
//     logging: false, // Para que no aparezcan mensajes en consola.
//   },

// );


// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });


const User = require("./User");
const Admin = require("./Admin");
const Category = require("./Category");
const Order = require("./Order");
const Product = require("./Product");

User.initModel(sequelize);
Admin.initModel(sequelize);
Category.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category, { foreignKey: 'categoryId' });



module.exports = {
  sequelize,
  User,
  Admin,
  Category,
  Order,
  Product,
};
