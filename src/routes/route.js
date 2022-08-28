const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midWare = require('../middleWare/auth')

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end,get user details
router.get("/users/:userId", midWare.midWare1,userController.getUserData)

//update user
router.put("/users/:userId",midWare.midWare1, userController.updateUser)

//DELETE API isDeleted
router.delete("/users/:userId",midWare.midWare1,userController.deleteUser)




module.exports = router;