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

//ARRAYS & CONTROL FLOW
/*
A. Talk about it:
?What are the things in an array called?
Elements
?Do Arrays guarantee those things will be in order?
No
?What real-life thing could you model with an array?
An ice cube tray. And today was a good day.
*/
/*
B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes
*/
const quotes = ["I'll be back", "No Fate but What We Make", "I'm tired of these heccin' snakes on this heccin' plane!"]
/* 
C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]
?How do you access the 1st element in the array?
randomThings[0];
?Change the value of "Hello"to "World"
randomThings.splice(2,1,"World");
!Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
*/
const randomThings = [1, 10, "Hello", true];
randomThings.splice(2,1,"World");
console.log(randomThings);
/* 
D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array
*/
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2]; //access 3rd elem
ourClass.splice(4,1,"Octocat");
ourClass.push("Cloud City");
/*
E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). 
?Did you mutate the array? 
Yes
?What does mutate mean? 
To alter
?Did the .reverse()method return anything?
a reversed reference of this array
*/
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.shift();
myArray.pop();
myArray.reverse();
/* 
F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.
*/
let num = 3;
if(num <= 100){
    console.log('Little number');
}
else{
    console.log('BIG NUMBER');
}
/**
G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log() little number if the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".
*/
num = 20;
if(num < 5){
    console.log('little number');
}
if(num > 10){
    console.log('big number');
}
else{
    console.log('monkey');
}
/**
 H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )
  kristynsCloset.splice(6,0,"Raybans");
  kristynsCloset.splice(5,1,"Stained knit hat");
  let shirt = thomsCloset[0][1];
  let pants = thomsCloset[1][2];
  let acc = thomsCloset[2][2];
  console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${acc}!`);
  thomsCloset[1].splice(2,1,"Footie Pajamas");