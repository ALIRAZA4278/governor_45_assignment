// Name: Ali Raza
// Date: 2/24/2024

// Q26:- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

let alien_color: string = "green";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === "green") {
  console.log("player just earned 5 points for shooting the alien");
} else {
  console.log("player just earned 10 points");
}

alien_color = "red";
if (alien_color === "green") {
  console.log("player just earned 5 points for shooting the alien");
}
