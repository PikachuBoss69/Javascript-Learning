//Create a variable of type string and try to add a number to it.

let variable = "hello"

console.log(variable + 5)

//Use typeof operator to find the datatype of the string in the last question.
console.log(typeof variable)

//. Create a const object in JavaScript. Can you change it to hold a number later?
const item ={
    hello: "Good to see you"
}
console.log(item.hello) //No we can't change it later to hold numbers

//Try to add a new key to the const object in Problem 3. Were you able to do it?
item.bye = "see you soon"

console.log(item.bye)

//Write a JS program to create a word-meaning dictionary of 6 words.

const dictionary = {
    namaste: "greetings",
    Ephemeral: "lasting for a very short time.",
    Ubiquitous: "present, appearing, or found everywhere.",
    Serendipity: "the occurrence and development of events by chance in a happy or beneficial way.",
    Mellifluous: "sweet or musical; pleasant to hear.",
    Labyrinthine: "irregular and intricate, like a maze."

}

console.log(dictionary);
// Accessing a specific word's meaning
console.log(dictionary.Serendipity);