"use strict";
// Name: Ali Raza
// Date: 19/4/2024
// Q41 :Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Ali Raza", " Bilal", "Hadi"];
let show_magicians = (magicians) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
};
show_magicians(magicians);
