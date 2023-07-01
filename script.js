/* 
A. Q + A
? How do we assign a value to a variable?
A: Using let or const, depending on the use case, and at least one letter, as variable names cannot start with a number. Also, ensure the variable name is not a keyword. Then, using the assignment operator (=), assign a value to the variable.

?How do we change the value of a variable?
A let variable may be reassigned by simply stating the variable, an assignment operator, and a new value. A const will generally throw an error when trying to change the value. If the const is an object or an array, the stored values may be changed using certain functions so that changes are deliberate.

?How do we assign an existing variable to a new variable?
Declare a variable and assignment operator, and then the existing variable. Ex) let a = 1; let b = a; 

?Remind me, what are declare, assign, and define?
To declare is to create a variable, function, object, or array with proper syntax. To assign is to assign that declaration to a value, to define is to create that value.


?What is pseudocoding and why should you do it?
Psuedocode is a method of planning a program by breaking a program down into smaller problem sets and solving them as efficiently as possible using minimal code syntax and solving the logical problems so that the solution can later be implemented with code. 

?What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
I would say ideally 80% thinking/planning, 20% coding, but depending on time constraints and complexity, this might not always be possible.
*/

/* 
B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

1 Create a variable called firstVariable
2 Assign it the value of the string "Hello World"
3 Change the value of this variable to some number
4 Store the value of firstVariable in a new variable called secondVariable
5 Change the value of secondVariableto any string.
6 What is the value of firstVariable?
7 Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
*/
let firstVariable = 'Hello World';
firstVariable = 42;
let secondVariable = firstVariable;
secondVariable ="any string";
//firstVariable value is 42.
let yourName ='Taylor';
console.log(`Hello, my name is ${yourName}`);

/*
C. Booleans. Ensure the following prints true in the console 
*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === "Name");

console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false);
console.log(e === 'Kevin')
console.log(a != b > c);
console.log(a <= a < d);
console.log(48 !== '48');