const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

router.post("/", userController.store);
router.post("/wishlist/:id", userController.create)
// router.get("/crear", userController.create);
// router.get("/:id", userController.show);
// router.get("/:id/editar", userController.edit);
// router.patch("/:id", userController.update);


module.exports = router;
