const express = require("express");
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const router = express.Router();

// Rutas relacionadas al panel de control (Admin):
// ...
router.get("/products", productController.index);
router.post("/products", productController.store);
router.delete("/delete-product/:id", productController.destroy);
router.get("/:id/edit-product", productController.edit); //Envía los datos del producto a Editar en Admin.
router.patch("/:id/products", productController.update); //Recibe los datos del producto a editado por el Admin.

router.patch("/:id", orderController.update);


module.exports = router;
