const express = require("express")
const router = express.Router();
const orderXModelController = require("../controllers/modelXOrderController")

router.post("/new", orderXModelController.addOrderModel)
router.get("/get/:order", orderXModelController.getModelByOrder)






module.exports = router