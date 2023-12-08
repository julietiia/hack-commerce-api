const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

// Rutas relacionadas a los usuarios:
// ...
router.get("/", orderController.index);

router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));
router.get("/crear", orderController.create);
router.post("/", orderController.store);
router.get("/:id", orderController.show);
router.get("/:id/editar", orderController.edit);

router.delete("/:id", orderController.destroy);

module.exports = router;