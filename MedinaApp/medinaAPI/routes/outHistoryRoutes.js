const express = require("express")
const router = express.Router();
const OutHistoryController = require("../controllers/outHistoryController")

router.post("/new",OutHistoryController.createOutHistoryData)
router.post("/get/:criterio",OutHistoryController.getOutHistory)






module.exports = router