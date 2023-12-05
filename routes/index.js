const userRoutes = require("./userRoutes");
const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  app.use("/tokens", authRoutes);
  app.use("/usuarios", userRoutes);
  app.use("/", publicRoutes);
  app.use("/panel", privateRoutes);

};
