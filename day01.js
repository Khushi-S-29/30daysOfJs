// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var num = 1729;
console.log(num);
// Output : 1729

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let string = "JavaScript was first called Mocha, then LiveScript, before its final name";
console.log(string); 
// Output: JavaScript was first called Mocha, then LiveScript, before its final name

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const bool = true;
console.log(bool); // Output: true

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num_let = 100; // number
let str_let = "30 days of Javascript"; // string
let bool_let = true; // boolean
let obj_let = {FP_lang: "Haskell", OOP_lang : "C++"}; // object
let arr_let = ["C++","Python","Java","Haskell"]; // array

console.log(typeof num_let); // Output: number
console.log(typeof str_let); // Output: string
console.log(typeof bool_let); // Output: boolean
console.log(typeof obj_let); // Output: object
console.log(typeof arr_let); // Output: object

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let reaasignable = "Initial value";
console.log(reaasignable); // Output:Initial value
reassignVar = "Changed value";
console.log(reaasignable); // Output:Changed value

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constant = "Constant";
console.log(constant); // Output: Constant
// constVar = "New Value"; //throws TypeError: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let num_var = 100;//number
let str_var = "STRING";//string
let bool_var = true;//boolean
let obj_var = { KEY: "VALUE" };//object
let arr_var = [1, 2, 3, 4, 5];//object
let undefined_var;//undefined
let null_var = null;//object

let values_and_types = {
    [`num_var (${num_var})`]: typeof num_var,
    [`str_var (${str_var})`]: typeof str_var,
    [`bool_var (${bool_var})`]: typeof bool_var,
    [`obj_var (${obj_var})`]: typeof obj_var,
    [`arr_var (${arr_var.join(", ")})`]: typeof arr_var,
    [`undefined_var`]: typeof undefined_var,
    [`null_var`]: typeof null_var
};

console.log(values_and_types);


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let let_var = "Variables declared using 'let' are reassignable";
console.log(let_var); // Output: Variables declared using 'let' are reassignable
let_var = "reassigned";
console.log("New value : ",let_var); // Output:reassigned 

const const_var = "Variables declared using 'const' are  immutable";
console.log(const_var); // Output:Variables declared using 'const' are immutable
//const_var = "Trying to reassign"; //throws TypeError: Assignment to constant variable.
