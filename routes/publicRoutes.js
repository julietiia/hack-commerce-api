const express = require("express");
const router = express.Router();
const productController = require ("../controllers/productController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/products", productController.index);

module.exports = router;
