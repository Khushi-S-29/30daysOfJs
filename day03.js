// Activity 1: If-Else Statements

// - Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = -5;
if(num>0)
        console.log("Number is positive"); 
else if(num<0)
        console.log("Number is negative"); 
else
        console.log("Number is zero"); 
// Output: "Number is negative"

// - Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 18;
if(age>=18)
        console.log("The person is eligible to Vote"); 
else    
        console.log("The person is not eligible to Vote"); 
//Output : "The person is eligible to Vote"

// Activity 2: Nested If-Else Statements

// - Task 3 :  Write a program to find the largest of three numbers using nested if-else statements.
 let num1 = 5,num2 = 0 ,num3 = -5;
 let greatest = null;
 if (num1 >= num2)
 {
     if (num1 >= num3) 
         greatest = num1;
     else 
         greatest = num3;
 } 
 else 
 {
     if (num2 >= num3) 
         greatest = num2;
     else 
         greatest = num3;
 }
     
 console.log(`The greatest number among ${num1}, ${num2} and ${num3} is ${greatest}`); //Output: `The greatest number among -5, 0 and 5 is 5`

// Activity 3: Switch Case

// - Task 4 :Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 4;
switch(day) 
{
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Satday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("Invalid");
}
//Output: Thursday


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 85;
let grade = null
switch(true) 
{
    case (score>=90):
        grade='A';
        break;
    case (score>=80):
        grade='B';
        break;
    case score>=70:
        grade='C';
        break;
    case score>=60:
        grade='D';
        break;
    case score>=50:
        grade='E';
        break;
    default:
        grade='F';
        break;
}
console.log("Grade = ",grade);
//output: Grade = B

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number = 1729;
(number%2==0)?console.log("Even"):console.log("Odd"); 
//Output : Odd

//Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2020;

if(year % 400==0 ||(year%4==0 && year%100!=0))
    console.log(`${year} is a leap year`);
else
    console.log(`${year} is not a leap year`);
//Output : 2020 is a leap year

// Feature Request

// Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// Day of the Week Script:Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// Grade Assignment Script:Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// Leap Year Check Script:Write a script that checks if a year is a leap year using multiple conditions and logs the result.