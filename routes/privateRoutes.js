const express = require("express");
const router = express.Router();

// Rutas relacionadas al panel de control (Admin):
// ...
router.get("/products", productController.index);

module.exports = router;
