var rabbits = [];
var startRabbitsAmount = 2;
var daysTotest = 190;
var sex, age, amount;
function main() {
    
    creatingRabbits(startRabbitsAmount);
    
    
    lifeTime(daysTotest, rabbits);
    
    console.log(rabbits.lenght + "\n" + sex + " " + age + " " + amount);
}


function myFunction(){
    var sex = (document.getElementById("sexF").checked === true)? document.getElementById("sexF").value : (document.getElementById("sexM").checked === true)? document.getElementById("sexM").value : alert("No Sex declareted!");


    var age = document.getElementById("age").value;
    var amount = document.getElementById("amount").value;
    
    main();
}

