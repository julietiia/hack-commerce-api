const userRoutes = require("./userRoutes");
const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const authRoutes = require("./authRoutes");
const orderRoutes = require ("./orderRoutes")

module.exports = (app) => {
  app.use("/tokens", authRoutes);
  app.use("/orders", orderRoutes);
  app.use("/usuarios", userRoutes);
  app.use("/", publicRoutes);
  app.use("/panel", privateRoutes);


};
