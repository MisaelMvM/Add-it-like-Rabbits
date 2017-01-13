var rabbits = [];
var startRabbitsAmount = 2;
var daysTotest = 365;

function lifeTime(duration, rabbits) {
    
    for (var i = 0; i < rabbits.length; i++){
        
       // console.log( rabbits[i]); 
        Time(duration, rabbits[i], rabbits[i].birthDay);
        
    }
}

function creatingRabbits(amount) {
    for (var i = 0; i < amount; i++) {
        rabbits[i] = new Bunny();
    }
}


function addingRabbits(amount, birthDay) {
    for (var i = 0; i < amount; i++) {
        rabbits.push(new Bunny(birthDay));
    }
}

function deletingRabbits(index) {
    for (var i = rabbits.length - 1; i > 0 ; i--) {
        rabbits.splice(rabbits[index]);
    }
}
function myFunction() {
    alert("Button Pressed!");
}


function main() {
    
    creatingRabbits(startRabbitsAmount);
    
    
    lifeTime(daysTotest, rabbits);
    
    
//    document.write("Total Rabbits: " + rabbits.length); 
}


main();


    
    
    