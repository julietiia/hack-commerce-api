const { Admin, Category, Order, Product, User, sequelize } = require("../models");
// const path = require("path");
// const fs = require("fs");
const runAllSeeders = require("../seeders/runAllSeeders");
const createDatabaseTables = require("../createDatabaseTables")
// Reset database
// await Product.destroy({ where: {} });
// await Admin.destroy({ where: {} });
// await Category.destroy({ where: {} });
// await User.destroy({ where: {} });
// await Order.destroy({ where: {} });

// console.log("Las fueron borradas");
// await runAllSeeders();

// res.end("Los datos de los seeders han sido insertados.");
// async function destroy(req, res) {
//   let transaction;

//   try {
//     transaction = await sequelize.transaction();

//     console.log("Truncating tables...");
//     await Order.destroy({
//       where: {},
//       transaction,
//     });
//     console.log("Orders truncated successfully.");

//     await User.destroy({
//       where: {},
//       transaction,
//     });
//     console.log("Users truncated successfully.");

//     await Product.destroy({
//       where: {},
//       transaction,
//     });
//     console.log("Products truncated successfully.");

//     await Category.destroy({
//       where: {},
//       transaction,
//     });
//     console.log("Categories truncated successfully.");

//     console.log("Running seeders...");
//     await runAllSeeders(transaction);
//     console.log("All seeders executed successfully.");

//     console.log("Committing transaction...");
//     await transaction.commit();

//     res.end("Los datos de los seeders han sido insertados.");
//   } catch (error) {
//     // If there's an error, rollback the transaction
//     if (transaction) {
//       await transaction.rollback();
//     }
//     console.error("Error:", error);
//     res.status(500).send("Internal Server Error");
//   }


//   res.end("Los datos de los seeders han sido insertados.");
// }

async function destroy(req, res) {
  await createDatabaseTables();
  console.log("Las tablas fueron creadas")
  await runAllSeeders();
  res.end("Los datos han sido insertados")
}

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
