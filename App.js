var rabbits = [];

function timeLine(duration, rabbits) {
    for (var i = 0; i < rabbits.length; i++){
        Time(duration, rabbits[i]);
    }
}

for (var i = 0; i <= 4; i++) {
    rabbits[i] = new Bunny();
}

var totalRabbits = 4;
timeLine(365, rabbits)

function setup() {
} 
function draw() { 
}

for (var i = 0; i < rabbits.length; i++) {
    console.log(rabbits[i]);
}
document.write("Total Rabbits: " + totalRabbits); 

    
    
    