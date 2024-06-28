const express = require("express")
const router = express.Router();
const modelMPController = require("../controllers/modelMPController")



// router.post("/new",OutHistoryController.createOutHistoryData)
// router.post("/get/:criterio",OutHistoryController.getOutHistory)

router.post("/new",modelMPController.addModelMP)
router.get("/all",modelMPController.getAllModelsMP)



module.exports = router