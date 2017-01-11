function Time(days, rabbit, birthDay=1) { 
    for (var i = birthDay; i < days; i++){
        
        rabbit.age ++;            
        var fertilize = Math.random() >= 0.76;
        
        if (rabbit.age == 120){ //the rabbit became an adult
            //console.log("Adult");
            rabbit.receptive = true;
            rabbit.adult = true;
        }


        if (rabbit.lifeSpan == 0) {
            //console.log(i + " Deadh + lifeSpan = " + rabbit.lifeSpan);
            i = days -1;
        }

        //console.log(rabbit.age + " - Show rabbit receptive : " + rabbit.receptive);
        if (rabbit.adult === true){
            if (rabbit.receptive === true) { //testing if the rabbit is not in gestation
                if (rabbit.receptivePeriod == 0) { 
                    if (rabbit.notReceptivePeriod == 0){
                        rabbit.notReceptivePeriod = 2;
                        rabbit.receptivePeriod = 14;
                    } else {
                        rabbit.notReceptivePeriod --;
                    }
                } else {                    
                    if (fertilize === true && rabbit.gestation === false) {
                        //console.log(i + " startingGestation");
                        rabbit.startingGestation();
                    } else if (rabbit.gestation === false) {
                        rabbit.receptivePeriod --;
                    }                
                }
            } else {  
                if (rabbit.gestationPeriod === 0) {
                    rabbit.gestation = false;
                    rabbit.receptive = true;
                    //console.log(i + " addingNewRabbits");
                    addingRabbits(12, (i));

                } else {
                    rabbit.gestationPeriod --;
                }
            }      
        }
        rabbit.lifeSpan --;        
        
    }
}
