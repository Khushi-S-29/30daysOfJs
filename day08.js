// Day 8: ES6+ Features

// Activity 1: Template Literals
//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.



// Task 1: Create a string using template literals that includes the variables 'name' and 'age'
const name = 'Khushi';
const age = 18;

console.log(`Name: ${name}, Age: ${age}`); 
// Output: Name: Khushi, Age: 18

// Task 2: Create a multi-line string using template literals and log it to the console.

const multiLineStr = `This is a string
that spans multiple
lines.`;

console.log(multiLineStr);
// Output: 
// This is a string
// that spans multiple
// lines.
//Activity 2: Destructuring
//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.


const numbers = [1, 2, 3, 4];

const [first, second] = numbers;

console.log(`First: ${first}, Second: ${second}`);
// Output: First: 1, Second: 2

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.


const book = { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' };

const { title, author } = book;

console.log(`Title: ${title}, Author: ${author}`);
// Output: Title:JavaScript: The Good Parts , Author: Douglas Crockford

//Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.


const arr1 = [1, 2, 3];

const newArr = [...arr1, 4, 5];

console.log(newArr);
// Output: [1, 2, 3, 4, 5]
//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.


function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); 

// Activity 4: Default Parameters
//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));    // Output: 5 (5 * 1)
console.log(multiply(5, 2)); // Output: 10 (5 * 2)
//Activity 5: Enhanced Object Literals
//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const person = {
  name: 'JS',
  greet() {
    return `Hello, ${this.name}!`;
  }
};

console.log(person.greet());
// Output: Hello, JS!

// Task 9: Create an object with computed property names based on variables and log the object to the console.


const lang = 'cpp';
const paradigm = 'oop';

const obj = {
  [lang]: paradigm
};

console.log(obj);
// Output: { oop: 'cpp' }