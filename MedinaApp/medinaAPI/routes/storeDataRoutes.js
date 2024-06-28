const express = require("express")
const router = express.Router();
const StoreDataController = require("../controllers/storeDataController")

router.post("/new", StoreDataController.createStoreData)
router.get("/find/all", StoreDataController.findAllDataStore)
router.post("/find/bydescription", StoreDataController.findByDescription)
router.post("/update", StoreDataController.updateStoreData)
router.delete("/delete/:id", StoreDataController.eraseStoreData)
router.post("/find/quantity", StoreDataController.findQuantityByDescription)





module.exports = router