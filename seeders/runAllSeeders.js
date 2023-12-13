require("dotenv").config();

async function runAllSeeders() {
  await require("./categorySeeder")();
  await require("./productSeeder")();
  await require("./userSeeder")();
  await require("./adminSeeders")();


  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
