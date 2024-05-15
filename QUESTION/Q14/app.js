"use strict";
// Name: Ali Raza
// Date: 2/24/2024
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_list = void 0;
// Q14:- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest_list = ["Ali", "Zain", "Ahmed", "Rafay"];
exports.Guest_list = Guest_list;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear ".concat(Guest_list[i], " : \n you are invited to dinner! \n"));
}
