var express = require("express");
var router = express();
const match = require("/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Smaa Systemer/opgaver/Godkendelsesopgaver/Opgave3 /Models/Users") // her defineres hvor min const: match skal hente de eksporterede filer

function userController(req, res) {  // Her kalder jeg min usercontroller function
    res.json(match.matchArray)       // Her bliver mit matcharray defineret som det der skal hentes, stringified og send til min local server 

}


module.exports = userController; //Her fortæller jeg hvad dette dokument/fil skal eksportere videre: i dette tilfælde funktionen userController






