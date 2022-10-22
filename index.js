// //Requesting user to enter username

// let username = prompt("Please enter username.");

// // welcome user to the Game.

// console.log(`${username}, you are welcomed to Banda Guessing Game!!!`);

// //Variable declarations for loop

// let points = 0;
// let level = 1;
// let maxStage = 10;

//Using the For loop
for (let i=2; i > 10; i++){
let comPuter= Math.floor(Math.random()* i ) + 1;
let userPlayer=parseInt(prompt(`Please guess a number between 1 and ${i}`));

    console.log(userPlayer);
}
