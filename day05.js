// Day 5: Functions
// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number) {
    (number % 2 === 0)?console.log(`${number} is even`):console.log(`${number} is odd`);
        
    }

checkEvenOrOdd(14); // 14 is even
checkEvenOrOdd(29); // 29 is odd

// Task 2: Write a function to calculate the square of a number and return the result.
function square(number) {
    return number * number;
}
console.log(square(5)); // Output: 25

// Activity 2: Function Expression

const findMax = function(a, b) {
    console.log(`The maximum of ${a} and ${b} is ${a > b ? a : b}`);
};
findMax(-7, 0); //Output: The maximum of -7 and 0 is 0

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStr = function(str1, str2) {
    return str1 + str2;
};
console.log(concatenateStr('JAVA', 'SCRIPT')); //Output: JAVASCRIPT

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (a, b) => a + b;
console.log(calculateSum(5, 10)); // Output : 15

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsChar = (char, str) => str.includes(char);
console.log(containsChar('a','javascript')); // true
console.log(containsChar('j','python')); // false

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(10, 5)); //Output : 50
console.log(multiply(6)); //Output: 6

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 45) {
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet('Khushi', 18)); // Output :Hello, Khushi. You are 25 years old.
console.log(greet('JS')); //Output : Hello, JS. You are 30 years old.

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls that function that many times.
function repeats(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
function JS() {
    console.log("JS");
}
repeats(JS,4);
//Output:
// JS
// JS
// JS
// JS

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function composeFunc(f1, f2, val) {
    return f2(f1(val));
}
const sq = num => num ** 2;
const sqrt = num => num ** (1/2);
console.log(composeFunc(sq, sqrt , 6)); // Output : 6
