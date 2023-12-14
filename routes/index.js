const userRoutes = require("./userRoutes");
const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const authRoutes = require("./authRoutes");
const orderRoutes = require ("./orderRoutes")
const categoryRoutes = require("./categoryRoutes")

module.exports = (app) => {
  app.use("/tokens", authRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/orders", orderRoutes);
  app.use("/users", userRoutes);
  app.use("/", publicRoutes);
  app.use("/panel", privateRoutes);

};
