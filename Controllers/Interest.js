var express =  require("express");
var router = express();
const interest = require("../Models/Users")
console.log(interest.interestArray)


function userController(req, res){
    res.json(interest.interestsArray);

}





module.exports = userController;
