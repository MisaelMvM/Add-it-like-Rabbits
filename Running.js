function Time(days, rabbit) { 
    for (var i = 0; i < days; i++){
        var fertilize = Math.random() >= 0.92;
        rabbit.age ++;
        if (rabbit.age == 120){ //the rabbit became an adult
            rabbit.receptive = true;
            rabbit.adult = true;
        }
        //console.log(rabbit.age + " - Show rabbit receptive : " + rabbit.receptive);
        if (rabbit.adult === true){
            if (rabbit.receptive === true) { //testing if the rabbit is not in gestation
                if (rabbit.receptivePeriod === 0) { 
                    if (rabbit.notReceptivePeriod === 0){
                        rabbit.notReceptivePeriod = 2;
                        rabbit.receptivePeriod = 14;
                    } else {
                        rabbit.notReceptivePeriod --;
                    }
                } else {                    
                    if (fertilize === true && rabbit.gestation === false) {
                        rabbit.startingGestation();
                    } else if (rabbit.gestation === false) {
                        rabbit.receptivePeriod --;
                    }                
                }
            } else {  
                if (rabbit.gestationPeriod === 0) {
                    totalRabbits += 12;
                    rabbit.gestation = false;
                    rabbit.receptive = true;
                } else {
                    rabbit.gestationPeriod --;
                }
            }      
        }
    }
}
