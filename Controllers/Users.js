var express = require("express")
var router = express();
const User = require("/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Smaa Systemer/opgaver/Godkendelsesopgaver/Opgave3 /Models/Users") // her defineres hvor min konstant: User skal hente sin eksporterede data fra

function userController(req, res) { // Her bliver min function usercontroller kaldt 
    res.json(User.userArray)        // Her defineres mit userarray som det der skal hentes og sendes, bliver stringified og sendt til min local server

}

module.exports = userController; //Her fortæller jeg hvad dette dokument/fil skal eksportere videre: i dette tilfælde funktionen userController
