// Super klassen user oprettes og dens properties defineres
class user{
    constructor(firstName, lastName, gender, age, location, mail, interests){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.location = location; 
        this.mail = mail;
        this.interests = [];
    }
}
 // PaymentUser klassen oprettes og extender user klassen
class paymentUser extends user{
    constructor(user,creditCardInfo){
    super(user)
    this.creditCardInfo = creditCardInfo;
    }
}
//freeUser klassen oprettes og extender user klassen
class freeUser extends user {
    constructor(user, trialPeriod){
        super(user.firstName, user.lastName, user.gender, user.age, user.location, user.mail, interests)
        this.trialPeriod;
    }
}
//CreditCard klassen skal ikke extende user, da det skal være muligt at bruge andre menneskers kort til at betale brugeren 
class creditCard extends paymentUser{
    constructor(paymentUser,cardHolder, cardNumber, expirationDate, CVV,){
    super(paymentUser)
    this.cardHolder  = cardHolder;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.CVV = CVV;

    }
}

// Efterfølgende klasser oprettes (interests, images, match) disse extender user-klassen og ikke både freeuser og paymentuser, da dette sparer os for at skrive ekstra kode + begge disse klasser skal indeholde disse alligevel

class interests extends user{
    constructor(user, interests){
    super(user)
    user.interests = interests; 
    }
}

class match extends user {
    constructor(user,match1,match2){
        super(user)
        this.match1 = match1;
        this.match2 = match2;
    }

}

class image{
    constructor(imageType, author, imageSize,imagePath){ 
        this.imageType = imageType;
        this.author = author;
        this.imageSize = imageSize;
        this.imagePath = imagePath;
    }
}




var imageX = new image("png", "userX", "49 kb", "/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Små Systemer/opgaver/Godkendelsesopgaver/Opgave3");
var imageY = new image("png", "userY", "143 kb","/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Små Systemer/opgaver/Godkendelsesopgaver/Opgave3");


var userX = new user ("Theis", "Pedersen","Male","23","Amager","theis_p@hotmail.com", imageX);
var credit = new creditCard("Theis C. Pedersen","1122 3344 5566 7788", "09/25", "123",);
var theis = new paymentUser(userX, credit, interestsTheis);
var interestsTheis = new interests(userX,"Basketball, Shoes, Fitness, Codeing");


var userY = new user ("Mariah", "Rosa", "Female", "21", "Østerbro", "theis_p@hotmail.com", imageY);

new interests(userX,"Golf, Basketball, Fashion")
new interests(userY,"Fashion, Make-up, Shoes, Jewelry")

console.log(userX.interests)

var testMatch1 = new match(userX.firstName, userY.firstName)
var testMatch2 = new match("theis", "Mariah")


var userArray = [];     //Et user array oprettes 
userArray = [userX, userY];    // Begge vores users bliver samlet i en variabel 

var interestsArray = [];
interestsArray = [userX.interests,userY.interests];

var matchArray = [];
matchArray = [testMatch1, testMatch2];





module.exports = {userArray,interestsArray, matchArray};













