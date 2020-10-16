var express = require("express")
var router = express();
const User = require("/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Smaa Systemer/opgaver/Godkendelsesopgaver/Opgave3 /Models/Users")


function userController(req, res) {
    res.json(User.userArray)

}

module.exports = userController;
