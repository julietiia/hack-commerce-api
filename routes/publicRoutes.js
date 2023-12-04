const express = require("express");
const router = express.Router();
const productController = require ("../controllers/productController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/products", productController.index);
router.get("/category/:id", productController.getByCategory)
router.get("/similar-designs/category/:id", productController.store);
module.exports = router;
