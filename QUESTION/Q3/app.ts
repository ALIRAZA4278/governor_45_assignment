// Name: Ali Raza
// Date : Friday 2/23/2028 


// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Store the person's name in a variable
let personName: string = "John Doe";

// Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the name in titlecase
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());