

function lifeTime(duration, rabbits) {
    
    for (var i = 0; i < rabbits.length; i++){
        
       // console.log( rabbits[i]); 
        Time(duration, rabbits[i], rabbits[i].birthDay);
        
    }
}

function creatingRabbits(startRabbitsAmount) {
    for (var i = 0; i < amount; i++) {
        rabbits[i] = new Bunny(age);
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





    
    
    