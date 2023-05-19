const {body,validationResult} = require("express-validator")

const getUserDetail = async (req,res) =>{
   const userId = req.params.id;
//    res.send(`Your User Id is ${userId}`)
return res.status(200).json(`Your id is ${userId}`)
}

const createUser = async (req,res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(200).json(userData)
    }
    const userData = req.body;
    // res.send(userData,"saq")
}

module.exports = {getUserDetail,createUser};