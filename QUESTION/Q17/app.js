// Name: Ali Raza
// Date: 2/24/2024
// Q17:- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_list = ["Ali", "Zain", "Ahmed"];
var not_present = "zain";
var new_guest = "babar";
guest_list[1] = new_guest;
guest_list.unshift('shaheen', 'afridi', 'abdullah');
console.log("\nunfortunately we can not arrange big table, Only two people allow");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam, " + remove_guest + " Sorry you are not invited for dinner.");
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + '\n You are still invited on tomorrow dinner\n Thank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
