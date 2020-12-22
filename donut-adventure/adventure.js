class Hero {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
                sprinkleSpray: 5,
                sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']
    }
    talkSass () {
        console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)])
    }
    announceHealth () {
        console.log('Dougie health level is ' + this.health)
    }
    fight(enemy) {
        console.log('i\'m ready to rumble');
        console.log(`${this.weapons.sprinkleSpray} damage`);
        enemy.health -= this.weapons.sprinkleSpray;
    }
}

const dougie = new Hero()

// Our Enemy
// Now let's create our Enemy class!

class Enemy {
    constructor (name) {
        this.name = name; 
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10,
        };
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack () {
        console.log(console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)]))
    }
    announceHealth () {
        console.log('Pizzarat health level is ' + this.health)
    }
    fight(enemy) {
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
        console.log(`${this.weapons.cheeseGrease} damage`)
        enemy.health -= this.weapons.cheeseGrease
    }
}

const pizzaRat = new Enemy('Pizza Rat');

dougie.talkSass()


pizzaRat.talkSmack()


dougie.announceHealth()

pizzaRat.announceHealth()

pizzaRat.fight(dougie);

dougie.fight(pizzaRat);

dougie.announceHealth();

pizzaRat.announceHealth();


