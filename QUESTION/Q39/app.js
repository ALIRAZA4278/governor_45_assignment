"use strict";
// Name: Ali Raza
// Date: 4/1/2024
// Q39 : City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
const city_country = (city, country) => {
    // return (`${city}, ${country}`);
    console.log(`${city}, ${country}`);
};
city_country("karachi", "pakistan");
let mycites = city_country("karachi", "pakistan");
console.log(mycites);
console.log(city_country("karachi", "pakistan"));
console.log(city_country("delhi", "india"));
console.log(city_country("kabul", "afghanistan"));
