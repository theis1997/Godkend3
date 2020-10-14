class user{
    constructor(firstname, lastname, gender, age, location, mail){

    this.firstname = firstName;
    this.lastname = lastName;
    this.gender = gender;
    this.age = age;
    this.adress = adress; 
    this.mail = mail;
    }
}

class paymentUser extends user{
    constructor(user,creditCardInfo){
    super(user.firstName, user.lastName, user.gender, user.age, user.location, user.mail)
    this.creditCardInfo = creditCardInfo;
    }
}

class freeUser extends user {
    constructor(user, trialPeriod){
        super(user.firstName, user.lastName, user.gender, user.age, user.location, user.mail)
        this.trialPeriod;
    }
}
//CreditCard klassen skal ikke extende user, da det skal være muligt at bruge andre menneskers kort til at betale brugeren 
class creditCard extends paymentUser{
    constructor(cardHolder, cardNumber, expirationDate, CVV,){

    this.cardHolder  = cardHolder;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.CVV = CVV;

    }
}

// Efterfølgende klasser oprettes (interests, images, match) disse extender user-klassen og ikke både freeuser og paymentuser, da dette sparer os for at skrive ekstra kode + begge disse klasser skal indeholde disse alligevel

class interests extends user{
    constructor(user, interest){
    super(user.firstName, user.lastName, user.gender, user.age, user.location, user.mail)
    this.interest = interest; 
    }
}

class match extends user {
    constructor(user,match){
        super(user.firstName, user.lastName, user.gender, user.age, user.location, user.mail)
        this.match = match;
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







var userX = new user ("Theis", "Pedersen","Male","23","Amager","theis_p@hotmail.com");
var credit = new creditCard("Theis C. Pedersen","1122 3344 5566 7788", "09/25", "123", );
var theis = new paymentuser(userX, interestsTheis);
var interstsTheis = new interest(Theis,"basketball,football,fashion");
var imageOne = new image("png","Theis","49 kB på disken","/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Små Systemer/opgaver/Godkendelsesopgaver/Opgave3");


var userY = new user ("Mariah", "Rosa", "Female", "21", "Østerbro", "theis_p@hotmail.com");
var maria = new freeUser(userY,interestsMaria);
var interestMaria = new interest(Maria,"fitness, dancing, fashion");
var imageTwo = new image("png","Maria","143 kB","/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Små Systemer/opgaver/Godkendelsesopgaver/Opgave3");















