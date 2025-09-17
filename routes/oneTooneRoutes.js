const express = require("express")
const controller = require("../controllers/oneToOneControllers")
const router = express.Router()
router.get("/", controller.getAllonetoones)
router.post("/", controller.saveNewoneToOne)
router.delete("/:sno", controller.deleteOnToOne)
router.put("/:sno", controller.updateOneToOne)
module.exports = router;