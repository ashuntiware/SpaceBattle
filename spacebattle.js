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
    if (Math.random() < this.accuracy)
    console.log('Successful Attack!')
    alienSpaceship.hull = alienSpaceship.hull - this.firepower
    console.log(`${alienShip[0].name} has ${alienShip[0].hull} health remaining.`)
}else{
        console.log('Try again! They missed.')
    
}
    
    
console.log(alienSpaceship)
  



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

humanSpaceship1.attack(alienShip[0])
humanSpaceship2.attack(alienSpaceship[1])


