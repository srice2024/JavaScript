/* This is the first part of the Javascript Course by Jonas Schmedtmann on Udemy. I will be following allong and coding what I can here
and I will also have my notebook on Notion that will be the notes on subjects that are not really code based and would not make 
sense in this position*/

//Creation of variables with proper practices utilizing const instead of let except for when you know the varibale is going to change.
const country = `United States`;
const continent = `North America`;
const population = 75;
const isIsland = false;
const language = "English";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//utilizing operators and assigning the outcome to a new variable and printing to the console.
const split = population / 2;
const extra = population + 1;
const more = population > 6;
const ave = population > 33;
const description = `${country} is in ${continent}, and its ${population} million people speak portuguese`;

console.log(split);
console.log(extra);
console.log(more);
console.log(ave);
console.log(description);

//Creating a BMI Calculation that takes the height and weight of each person and compares their BMI to eachother.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark / heightMark);
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn);
console.log(BMIMark);
console.log(markHigherBMI);

/*Allows you to be able to run code in a manner that uses logic about true or false statements. 
I can have the code destinguish whether or not this person can take their driver's test or not.*/
let age = 17;
let yearsLeft = 18 - age;
if (age >= 18) {
  console.log(`You can take your driver's test`);
} else {
  console.log(
    `You have to wait ${yearsLeft} before you can take your driver's test.`
  );
}
//I can also log a variable in the code block, I have an empty variable and will assign it with the answer.
const birthyear = 1995;
let century;
if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`You were born in the ${century} century`);

//else if can be added to the if else statement in order to have more options in the case of developing more logic within a piece of code. Else will not read conditions and will just print the value
//when it has a condition as it does not read the conditions.
let person = 21;
if (person < 13) {
  console.log(`Preteen`);
  //&& is the and operator and it will return true only if all the variables are true if one is false then the whole operation is false.
} else if (person >= 13 && person <= 19) {
  console.log(`Teenager`);
} else if (person >= 20) console.log(`Adult`);

// Switch statements will allow you to run code and select a point of reference (the variable) to pick from and display the data

const day = "sunday";
switch (day) {
  case "monday":
    console.log(`Plan Course Summary`);
    break;
  case "tuesday":
    console.log(`Read Lesson Plan`);
    break;
  case "wednesday":
    console.log(`Create Workflows`);
    break;
  case "thursday":
    console.log(`Edit workflows`);
    break;
  case "friday":
    console.log(`Create flow charts`);
    break;
  case "saturday":
    console.log(`Built New office processes`);
    break;
  case "sunday":
    console.log(`Late night party`);
    console.log(`Medical check up `);
    break;
  default:
    break;
}
//The conditional operator allows you to run a logical question like an if else statement in one line. if ? true : false; use console log when doing the full statement
const newAge = 11;
const drink =
  newAge >= 18
    ? console.log("I like to drink wine")
    : console.log("I like to drink water");
//You can use template literals because the conditional operator is an expression. Do not use console log when using it within a template literal
console.log(
  `At my age ${newAge >= 18 ? "I like to drink wine" : "I like to drink water"}`
);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
