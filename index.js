// Requesting user to enter username

let username = prompt("Please enter username.");

// Welcome user to the Game.

console.log(`${username}, you are welcomed to Guessing Game!!!`);

// Variable declarations for loop

let points = 0;
let level = 1;
let maxStage = 10;

// Using the For loop
for (let i = 2; i < 11;) {
  console.log(`Welcome to stage ${level}`)
  let comPuter = Math.floor(Math.random() * i) + 1;
  let userPlayer = parseInt(prompt(`Guess a number between 1 and ${i}: `));
  
 if (comPuter === userPlayer){
   i++;
   points++;
   level++;
   console.log(`Hurray, You now have ${points} points and have moved to stage ${level}`);
     
 }else {
   console.log(`Sorry, You misse. Please try again.`);
 }
}

