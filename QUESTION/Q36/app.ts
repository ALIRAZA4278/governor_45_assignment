// Name: Ali Raza
// Date: 4/1/2024
// Q36:- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = (size: string, message: string) => {
  console.log(`The size of the shirt is ${size} and the message is ${message}.`);
}
make_shirt("large", "I am learning typescript");