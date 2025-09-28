const express = require("express")
const controller = require("../controllers/oneToOneControllers")
const router = express.Router()
router.get("/", controller.getAllonetoones)
router.post("/", controller.saveNewoneToOne)
router.delete("/:id", controller.deleteOnToOne)
router.put("/:id", controller.updateOneToOne)
module.exports = router;