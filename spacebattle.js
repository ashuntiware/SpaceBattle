class Spaceship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }  


}


class HumanSpaceship extends Spaceship {
    constructor(hull, firepower, accuracy){
    super(hull, firepower, accuracy)
    
}
attack(alienSpaceship) {
    if(this.hull < 0 && humanSpaceship.hull > 0){ //checking if the human health is more than 0
        if (Math.random() < this.accuracy)
        console.log('Successful Attack!')
       alienSpaceship.hull = alienSpaceship.hull - this.firepower
       console.log(`${alienShip[0].name} has ${alienShip[0].hull} health remaining.`)
            
        }else{
            console.log('Try again! They missed.')
        }
        
    }
}  
    

  



const humanSpaceship1 = new HumanSpaceship(20, 5, .7);


class AlienSpaceship extends Spaceship{
    constructor(hull, firepower, accuracy) {
    super (hull, firepower, accuracy)
}
attack(humanSpaceship) {
    if(this.hull < 0 && humanSpaceship.hull > 0){ //checking if the human health is more than 0
        if (Math.random() < this.accuracy)
        console.log('Successful Attack!')
       humanSpaceship.hull = humanSpaceship.hull - this.firepower
     
            
        }else{
            console.log('Try again! They missed.')
        }
        
    }
}


let randomizeNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
let alienShip = []
for(let i = 0; i < 6; i++){
    const alienSpaceship = new AlienSpaceship(randomizeNumber(3, 6), randomizeNumber(2, 4), randomizeNumber(6, 8))
    alienShip.push(alienSpaceship)
}



for (let i = 0; i < alienShip.length; i++) { 
    const battleRound = (alienShip, HumanSpaceship) => {


humanSpaceship1.attack(alienShip[0])
humanSpaceship1.attack(alienShip[1])
humanSpaceship1.attack(alienShip[2])
humanSpaceship1.attack(alienShip[3])
humanSpaceship1.attack(alienShip[4])
humanSpaceship1.attack(alienShip[5])
humanSpaceship1.attack(alienShip[6])
        
      let winnerOfRound = true;
      while (winnerOfRound) {
        if (humanSpaceship1.hull > 0 && alienShip[0].hull >= 1) {
            console.log("Attack the Alien Ship!");
           humanSpaceship1.attack(alienShip[0]);
          }
          if (alienShip[0].hull > 0 && humanSpaceship1.hull > 0) {
            console.log("Yikes!! Aliens are attacking!");
            alienShip[0].attack(humanSpaceship1);
          }
          if (humanSpaceship1.hull > 0 && alienShip[0].hull <= 0) {
            console.log("We are kicking some Alien butt!");
            winnerOfRound = false;
            console.log('YOU SAVED THE PLANET!')
            
          } 
          
          else {
            console.log("You Lose. Game Over.");
            winnerOfRound =  false;
          }
    }
    
    
    };
    battleRound(alienShip, humanSpaceship1);
     } 