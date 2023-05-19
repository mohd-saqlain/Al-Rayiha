const express = require("express")
const router = express.Router();
const userController = require("../controller/usercontroller")

// router.get("/userdetail/:id",(req,res) =>{
//     const userId = req.params.id;
//     res.send(`Your User Id is ${userId}`)
//  });

router.get("/userdetail/:id",userController.getUserDetail)

router.post("/createuser",userController.createUser);



module.exports = router;