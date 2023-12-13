const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", categoryController.index);
// router.get("/crear", categoryController.create);

// router.get("/:id", categoryController.show);


module.exports = router;