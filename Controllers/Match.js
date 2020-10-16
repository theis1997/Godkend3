var express = require("express");
var router = express();
const match = require("/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Smaa Systemer/opgaver/Godkendelsesopgaver/Opgave3 /Models/Users")

function userController(req, res) {
    res.json(match.matchArray)

}


module.exports = userController;





