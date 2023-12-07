const express = require("express");
const productController = require("../controllers/productController")
const router = express.Router();

// Rutas relacionadas al panel de control (Admin):
// ...
router.get("/products", productController.index);
router.post("/products", productController.store);

module.exports = router;
