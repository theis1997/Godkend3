var express =  require("express");
var router = express();
const interest = require("../Models/Users") // her defineres hvor min konstant: interest skal hente sin eksporterede data fra 



function userController(req, res){     // Her kalder jeg min usercontroller function
    res.json(interest.interestsArray); // Her bliver mit interestarray defineret som det der skal hentes, "Stringified" så den kan læses af min webbrowser og sendes derefter til min server  

}





module.exports = userController; //Her fortæller jeg hvad dette dokument/fil skal eksportere videre: i dette tilfælde funktionen userController

