"use strict";
// Name: Ali Raza
// Date: 25/4/2024
// Q44 :Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log(`making a sandwich with ${items.join(", ")}.`);
}
make_sandwich("cheese", "ham");
make_sandwich("chicken", "lettuce", "tomato");
make_sandwich("beef", "avaocado", "spinach", "onion");