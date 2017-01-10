function Bunny() {
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
    
    this.startingGestation = function () {
        this.gestation = true;
        this.gestationPeriod = 31;
        this.receptive = false;
        this.notReceptivePeriod = 2;
        this.receptivePeriod = 14
    }
     
}