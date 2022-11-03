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
}
  
const humanSpaceship1 = new HumanSpaceship(20, 5, .7);


class AlienSpaceship extends Spaceship{
    constructor(hull, firepower, accuracy) {
    super (hull, firepower, accuracy)
}
}

let randomizeNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}



for(let i = 0; i < 5; i++){
    const alienSpaceship = new AlienSpaceship(randomizeNumber(3, 6), randomizeNumber(2, 4), randomizeNumber(6, 8))
    console.log(alienSpaceship)
}
