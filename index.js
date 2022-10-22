// Requesting user to enter username

let username = prompt("Please enter username.");

// Welcome user to the Game.

console.log(`Welcomed to YORDA Guessing Game, ${username}!!!`);

// Variable declarations for loop

let points = 0;
let level = 1;
let maxStage = 10;

// Using the For loop
for (let i = 2; i < 11;) {
  console.log(`Welcome to stage ${level}`)
  let comPuter = Math.floor(Math.random() * i) + 1;
  let userPlayer = parseInt(prompt(`Guess a number between 1 and ${i}: `));
  console.log(`Computer guessed ${comPuter}`);
  if (comPuter === userPlayer) {
    i++;
    points++;
    level++;
    console.log(`Hurray, You now have ${points} points and have moved to stage ${level}`);

  } else {
    console.log(`Sorry, You missed. Please try again.`);
  }
}

