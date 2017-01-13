var rabbits = [];
var startRabbitsAmount = amount;
var daysTotest = 190;

var sex = "";
var age = 0;
var amount = 0;

function main() {
    
    creatingRabbits(startRabbitsAmount);
    
    
    lifeTime(daysTotest, rabbits);
    
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Total Rabbits: " + rabbits.length);
    document.body.appendChild(x);
}


function myFunction(){
    if (document.getElementById("sexM").checked) {
        sex = document.getElementById("sexM").value;
    } else if (document.getElementById("sexF").checked) {
        sex = document.getElementById("sexF").value;
    }
    
    age = document.getElementById("age").value;
    amount = document.getElementById("amount").value;
    
    main();
}

