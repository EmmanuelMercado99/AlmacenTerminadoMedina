const express = require("express")
const router = express.Router();
const RequirementsListController = require("../controllers/requirementsListController")


router.post("/add",RequirementsListController.addRequirement)
router.get("/list/:model",RequirementsListController.getListByModel)
router.get("/list",RequirementsListController.getModels)
router.post("/update",RequirementsListController.updateReqList)
router.delete("/delete/:id",RequirementsListController.eraseStoreData)






module.exports = router