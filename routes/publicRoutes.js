const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");
const modelController = require("../controllers/modelController")

// Rutas relacionadas a la parte pública del sitio web:
router.get("/products/:id", productController.show)
router.get("/products", productController.index);
router.delete("/reset", modelController.destroy)
// router.get("products/search", productController.indexBy)
 router.get("/categories", categoryController.index); 
router.get("/category/:id", productController.getByCategory);
module.exports = router;
