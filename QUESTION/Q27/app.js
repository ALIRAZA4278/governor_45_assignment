"use strict";
// Name: Ali Raza
// Date: 2/24/2024
// Q26:-Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
// version 1
let alien_color = "green";
if (alien_color === "green") {
    console.log("player just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("player just earned 10 points");
}
else if (alien_color === "red") {
    console.log("player just earned 15 points");
}
else {
    console.log("Please enter a valid color");
}
// version 2
alien_color = "red";
if (alien_color === "green") {
    console.log("player just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("player just earned 10 points");
}
else if (alien_color === "red") {
    console.log("player just earned 15 points");
}
else {
    console.log("Please enter a valid color");
}
// version 3
alien_color = "yellow";
if (alien_color === "green") {
    console.log("player just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("player just earned 10 points");
}
else if (alien_color === "red") {
    console.log("player just earned 15 points");
}
else {
    console.log("Please enter a valid color");
}