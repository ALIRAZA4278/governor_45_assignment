"use strict";
// Name: Ali Raza
// Date: 2/24/2024
// Q16 :- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guest_list = ["Ali", "Zain", "Ahmed"];
for (let j = 0; j < Guest_list.length; j++) {
    console.log(`Dear ${Guest_list[j]} :  you are invited to dinner!`);
}
// console.log();
console.log("\nGood news!  we've found a bigger dinner table, so more space is available, So our news guest are \n");
Guest_list.unshift("Malik");
Guest_list.splice(2, 0, "raqeeb");
Guest_list.push("Bilal");
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} :  you are invited to dinner!`);
}
