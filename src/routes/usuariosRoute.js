const express = require("express")
const router = express.Router()
const controller = require("../controllers/usuariosController")

router.get("/", controller.get)
router.get("/:nome", controller.getUsuario)

module.exports = router