const express = require("express");
const router = express.Router();


const authController = require("../controllers/authController")


/**
 * Se sugiere usar este archivo para crear rutas relativas al proceso de
 * autenticación. Ejemplos: "/login" y "/logout".
 */

router.post("/", authController.getToken);
router.post("/admin", authController.getTokenAdmin);

module.exports = router;
