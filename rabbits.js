

function Rabbit() {
    //Rabbit breeds of medium to large size are sexually mature at 4 months
    //rabbits are receptive to mating about 14 of every 16 days
    //Pregnancy usually lasts about 31 days
    //Most of female rabbits give birth to 12
    //Their lifespan is typically 10 years
    
    this.age = 0;//days
    this.lifeSpan = 3650; //10 years times 365 days
    this.adult = false;
    this.gestation = false;
    this.receptive = false; //it must became true in 4 mounths or 120 days
    this.gestationPeriod = 0; //days
    this.receptivePeriod = 14; //days
    this.notReceptivePeriod = 2;
     
}

function time(years = 1, rabbit) {
    console.log("Time function");
    var days = years * 365;
    
    for (var i = 0; i < days; i++){
        var fertilize = Math.random() >= 0.9;
        console.log("loop");
        rabbit.age ++; 
        if (rabbit.age == 120){ //the rabbit became an adult
            console.log(" An Adult");
            rabbit.receptive = true;
            rabbit.adult = true;
        } 
        //console.log(rabbit.age + " - Show rabbit receptive : " + rabbit.receptive);
        if (rabbit.adult === true){
            if (rabbit.receptive === true) { //testing if the rabbit is not in gestation
                
                if (rabbit.receptivePeriod === 0) { 
                    if (rabbit.notReceptivePeriod === 0){
                        console.log("End of Not receptive Period");
                        rabbit.notReceptivePeriod = 2;
                        rabbit.receptivePeriod = 14;
                    } else {
                        console.log(" Not Receptive Period");
                        rabbit.notReceptivePeriod --;
                    }
                } else {                    
                    if (fertilize === true && rabbit.gestation === false) {
                        console.log("starting gestation ! ");
                        rabbit.gestation = true;
                        rabbit.gestationPeriod = 31;
                        rabbit.receptive = false;
                        rabbit.notReceptivePeriod = 2;
                        rabbit.receptivePeriod = 14
                    } else if (rabbit.gestation === false) {
                        console.log("receptive Period : " + rabbit.receptivePeriod);
                        rabbit.receptivePeriod --;
                    }                
                }

            } else {  
                if (rabbit.gestationPeriod === 0) {
                    console.log("New rabbits");
                    rabbits += 12;
                    rabbit.gestation = false;
                    rabbit.receptive = true;
                } else {
                    console.log("gestation ; " + rabbit.gestationPeriod);
                    rabbit.gestationPeriod --;
                }
            }      
        }
    }
}
var rabbits = 1;
var bob = new Rabbit();
time(1, bob);

console.log(" Outside of the loop \n");
console.log(bob);
console.log(rabbits);
    
    
    