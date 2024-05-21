/* This is the second part of the javascript masterclass these lessons are going to build off of what I learned 
in the previous class.*/
//Activating strict mode for more secure javascript coding
"use strict";
let haveDL = false;
const passTest = true;

if (passTest) haveDL = true;
if (haveDL) console.log("I can Drive");

// Functions - code that can be used over and over again

function logger() {
  // function body
  console.log("My name is Shon");
}
//calling, running, or invocking a function.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  //return will log the answer to the console and you will not see it unless you go back and set it to a varible and call it.
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthyear) {
  return 2037 - birthyear;
}
//Function Declaration
const age1 = calcAge1(1991);
console.log(age1);

//Function Expression or Anonymouse Function
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1992);
console.log(age1, age2);

//arrow functions
const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1990);
console.log(age3);

// variable = parameter => {code body, what is it the function actually does}
const yearsToRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
const calcageR = (birthyear) => 2037 - birthyear;

const yearsToRetirementIfElse = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsToRetirementIfElse(1995, "Shon"));
console.log(yearsToRetirementIfElse(1970, "Susy"));

//nesting functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
  return juice;
}
console.log(fruitProcessor2(5, 4));
//Arrays
const friendsList = ["Mike", "Roger", "Kevin", "Lupita"];
//or you can use this method
const teams = new Array("ManU", "ManCity", "NewCastle", "Liverpool");
console.log(teams);
console.log(friendsList);
//indexing, the code is indexed at 0 so
console.log(friendsList[0]);
//lenght, the total number of items in the array and is not zero indexed at this moment.
console.log(friendsList.length);
//last index -1, will show you the last item in the array
console.log(friendsList[friendsList.length - 1]);
//Replacing items in the array
friendsList[1] = "Ulises";
console.log(friendsList);
//Arrays can hold multiple data types
const shon = ["shon", "Rice", 2037 - 1995, "Accountant", friendsList];
// Array methods Basics
//push adds elements to the end of the array
friendsList.push("Ryan");
console.log(friendsList);
//unshift adds elements to the begining of the array
const unsNewList = friendsList.unshift("Elena");
console.log(friendsList);
console.log(unsNewList); //Will return the length of the new list
//pop will remove the last element of the array
const popNewList = friendsList.pop();
console.log(friendsList);
console.log(popNewList); //Will return the value that was taken away from the listing.
//shift will remove the first element from the array
friendsList.shift();
console.log(friendsList);
//indexof will return the index of the passed value
console.log(friendsList.indexOf("Lupita"));
console.log(friendsList.indexOf("Susy")); //-1 means that it was not found in the array
//includes will return a boolean value to depict if the value is there or not. It will check string to string and int to int.
console.log(friendsList.includes("Lupita"));
console.log(friendsList.includes("Susy"));
//Excersize answer for the course
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

//Objects-Object literal syntax
//property: value
const shonr = {
  firstname: "Shon",
  lastName: "Rice",
  birthyear: 1995,
  job: "Accountant",
  friends: ["Kevin", "Lupita", "Ulises"],
  driversLicense: true,
  //has to be a function expression and not a declaration. It will not have function or be assigned to any variable.
  /*calcAge: function () {
       ///console.log(this)
        this.age = 2024 - this.birthyear;
        return this.age;
    },

    //getSummary: function () { 
        return `${this.firstname} is a ${this.calcAge()}-year old ${shonr.job}, and he has ${this.driversLicense ? 'a' : 'no'} driver's license.`
    }*/
};
console.log(shonr);
//Dot vs. Bracket Notion
//Dot Notation
console.log(shonr.lastName);
//bracket notation
console.log(shonr["lastName"]);
shonr.location = "San Diego";
shonr["instagram"] = "@mrshonrice";
console.log(shonr);

console.log(
  `${shonr.firstname} has ${shonr.friends.length}, and ${shonr.friends[0]} is his best friend.`
);

//console.log(shonr.calcAge(1995))
//console.log(shonr.getSummary())//remember this is a function and should be called like one when setting up.

//Loops
//will keep running while the condition is true.
for (let rep = 0; rep <= 10; rep++) {
  //the actual line of code that will be repeated over and over
  console.log(`Lifting weights rep ${rep}`);
}
//coding in a for loop that cycles through the the array
for (let i = 0; i < friendsList.length; i++) {
  console.log(friendsList[i]);
}
//continue and break for loops
//continue will stop this iteration of the loop and continue onto the next. It will stop the iteration and run the next.
for (let i = 0; i < friendsList.length; i++) {
  if (typeof friendsList[i] !== "string") continue;
}
//break will stop the loop all together, once the break line runs the entire loop will stop
for (let i = 0; i < friendsList.length; i++) {
  if (typeof friendsList[i] !== "string") break;
}

//Looping backwards
for (let i = friendsList.length - 1; i >= 0; i--) {
  console.log(i, friendsList[i]);
}
//nested loops
for (let Excersize = 1; Excersize < 4; Excersize++) {
  console.log(`-------- Starting excersize ${Excersize}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} `);
  }
}
//while loops make a great choice when you do not know what your count is for
//while loop with a counter
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetition ${rep}`);
  rep++;
}
//while loop with out a counter and using randomized numbers.
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
