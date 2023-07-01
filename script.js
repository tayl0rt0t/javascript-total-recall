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

/*
D. The Farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit
*/
let animal = 'cow';
if(animal == 'cow'){
    console.log('mooooo');
}
else{
    console.log(`Hey! You're not a cow.`);
}
/* 
E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/
const age = 77;
if(age >= 16){
    console.log("Here are the keys!");
}
else{
    console.log(`Sorry, you're too young`);
}
//LOOPS
/*
A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive
Write a loop that will print out all the numbers from 10 up to and including 400
Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/
for(let i = 0; i <= 10; i++){
     console.log(i);
    }
for(let i = 10; i <= 400; i++){
     console.log(i);
    }
 for(let i = 12; i <= 4000; i+=3){
     console.log(i);
    }
/* 
B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

*/
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(`${i} <-- is an even number`)
    }
    else{
        console.log(i);
    }
}

for (let i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`I found a ${i}. High Five. I found a ${i}. Three's a crowd.`)
    }
    else if(i % 5 == 0){
        console.log(`I found a ${i}. High Five!`)
    }
    else if(i % 3 == 0){
        console.log(`I found a ${i}. Three's a crowd.`);
    }
    else{
        console.log(i);
    }
}
/* 
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/
let bank_account = 0;
for(let i = 1; i <= 10; i++){
    bank_account += i;
}
console.log(bank_account);
bank_account = 0;
for(let i = 1; i <= 100; i++){
    bank_account += i * 2;
}
console.log(bank_account);