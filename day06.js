//Day 6 : Arrays
// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1, 2, 3, 4, 5];
console.log('Array:', numbers);
// Output: Array: [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
console.log('First element:', numbers[0]);
// Output: First element: 1
console.log('Last element:', numbers[numbers.length - 1]);
// Output: Last element: 5
//Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log('After push:', numbers);
// Output: After push: [1, 2, 3, 4, 5, 6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log('After pop:', numbers);
// Output: After pop: [1, 2, 3, 4, 5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log('After shift:', numbers);
// Output: After shift: [2, 3, 4, 5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log('After unshift:', numbers);
// Output: After unshift: [0, 2, 3, 4, 5]

//Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let twice = numbers.map(num => num * 2);
console.log('Doubled array:', twice);
// Output: Doubled array: [0, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let even = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', even);
// Output: Even numbers: [0, 2, 4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of array:', sum);
// Output: Sum of array: 14

// Activity 4: Array Iteration


// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log('Iterating using For loop:');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Output:
// 'Iterating using For loop:
// 0
// 2
// 3
// 4
// 5

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log('Iterating using forEach:');
numbers.forEach(num => console.log(num));
// Output:
//Iteration using forEach :
// 0
// 2
// 3
// 4
// 5

//Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Matrix:', matrix);
// Output: Matrix: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

// Task 13: Access and log a specific element from the two-dimensional array.
console.log('Element at [1][2]:', matrix[1][2]);
// Output: Element at [1][2]: 6

//Feature Requests

// Array Manipulation Script
let arr = [1, 2, 3, 4, 5];
console.log('Original array:', arr);
// Output: Original array: [1, 2, 3, 4, 5]

// Add element using push
arr.push(6);
console.log('After push:', arr);
// Output: After push: [1, 2, 3, 4, 5, 6]

// Remove element using pop
arr.pop();
console.log('After pop:', arr);
// Output: After pop: [1, 2, 3, 4, 5]

// Remove element using shift
arr.shift();
console.log('After shift:', arr);
// Output: After shift: [2, 3, 4, 5]

// Add element using unshift
arr.unshift(0);
console.log('After unshift:', arr);
// Output: After unshift: [0, 2, 3, 4, 5]

// Array Transformation Script
let data = [1, 2, 3, 4, 5];

// Map: Double each value
let doubled = data.map(num => num * 2);
console.log('Doubled data:', doubled);
// Output: Doubled data: [2, 4, 6, 8, 10]

// Filter: Get even values
let evenNum = data.filter(num => num % 2 === 0);
console.log('Even data:', evenNum);
// Output: Even data: [2, 4]

// Reduce: Sum of all values
let total = data.reduce((acc, num) => acc + num, 0);
console.log('Sum of data:', total);
// Output: Sum of data: 15

// Array Iteration Script
let nums = [1, 2, 3, 4, 5];

console.log('Using for loop:');
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
// Output:
// Using for loop:
// 1
// 2
// 3
// 4
// 5

console.log('Using forEach:');
nums.forEach(num => console.log(num));
// Output:
// Using forEach:
// 1
// 2
// 3
// 4
// 5

// Two-dimensional Array Script
let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Two-dimensional array:', array2D);
// Output: Two-dimensional array: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

// Access and log a specific element
console.log('Element at [2][2]:', array2D[2][2]);
// Output: Element at [2][2]: 8