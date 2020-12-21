//variables

let alienships = [];
let hero;

//spaceship creation
class SpaceShip {
  constructor(name, hull, firepower, accuracy){
    this.name = name;
    this.hull = hull || Math.floor(Math.random() * 4) + 3;
    this.firepower = firepower || Math.floor(Math.random() * 3) + 2;
    this.accuracy = accuracy || (Math.floor(Math.random() *3) + 6) /10;
  }

  fight(enemy) {
    if (Math.random() < this.accuracy) {
      alert(
        `The ${this.name} has successfully hit and has done ${this.firepower} damage to ${enemy.name}.`
      );
      enemy.hull -= this.firepower;
      if (enemy.hull <= 0) {
        alert(`${enemy.name} has been destroyed!`);
        alienships.shift();
        if (alienships.length === 0 || hero.hull <= 0) {
          gameOver();
        }
      } else {
        this.showStatus(enemy);
      }
    } else {
      alert(`${this.name} missed ${enemy.name}`);
    }
  }
  showStatus(enemy) {
    alert(`${enemy.name}'s hull is now at ${enemy.hull}`);
  }
}


const generateShips = () => {
  for (let i = 1; i <= 6; i++) {
    let aliens = new SpaceShip(`AlienShip ${i}`);
    alienships.push(aliens);
  }
  hero = new SpaceShip("Our Ship", 20, 5, 0.7);
}

generateShips()
console.log(alienships)

const start = () => {
  generateShips();
  alert(
    `You are the captain of the ${hero.name}. ${alienships.length} alien ships approach, get ready to battle!`
  );
  askPrompt();
}

//Getting users input
const askPrompt = () => {
  let userInput = prompt(
    `${alienships[0].name} is ready to fight! What would you like to do fight or retreat? Type 'fight' or 'retreat'`
  ).toLowerCase();
  if (userInput === "fight") {
    hero.fight(alienships[0]);
    alienships[0].fight(hero);
  } else if (userInput === "retreat") {
    gameOver();
  } else {
    alert("Please enter 'fight' or 'retreat'");
    askPrompt();
  }
  askPrompt();
};

//check winner
const gameOver = () => {
  if (alienships.length === 0) {
    alert(
      "You beat the alien ships"
    );
  } else if (hero.hull <= 0) {
    alert("The aliens won");
  }
  let userInput = prompt("Would you like to play again? Type 'y' or 'n' ");
  if (userInput === 'y') {
    start();
  } else if (userInput === 'n') {
    prompt.close();
  } else {
    alert("Please enter 'y' or 'n' ");
    gameOver();
  }
}

start()