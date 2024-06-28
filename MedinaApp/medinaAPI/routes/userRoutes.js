const express = require("express")
const router = express.Router();
const UserController = require("../controllers/userController")


router.post("/new",UserController.createUser)
router.post("/find",UserController.findUser)





module.exports = router