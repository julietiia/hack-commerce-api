const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/products", productController.index); //Envía todos los productos al Admin
// router.get("/categories", categoryController.index); //Envía todas las categorías al Admin
router.get("/customers", userController.index); //Envía todos los usuarios/customers al Admin
router.get("/category/:id", productController.getByCategory);
module.exports = router;
