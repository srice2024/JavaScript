"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //later in the code the main ingridient will be the first item and the rest will be rested into the otherIngridients parameter
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

//Destructuring an array. You take the array and using [] you can set each element to a different value in the array.
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
//You can take the syquence and change around syntax so that you skip variables. Adding a , in between will give the space needed to skip.
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//deconstructing values and swapping them in the corrected order.
[main, secondary] = [secondary, main];
console.log(main, secondary);
//You can use a function and parse the answer from it through a destructioring and have it come through as a seperated value
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//Default vaules, when you do not know how much is in an object you can add default values to the variable.
const [p = 1, q = 1, r = 1] = [8];
console.log([p, q, r]);
//destructuring objects instead of arrays, you use the {} instead of [] and you can list any element and you will only return the array.live
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// setting a default item where it will return an empty array instead of undefined
const { menu = [], starterMenu: starters = {} } = restaurant;
console.log(menu, starters);
//mutated variables
let a = 11;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// allows you to create an expression with {} without having to create a code block.
({ a, b } = obj);
console.log(a, b);

//nested objects
//the opening hours is an object within an object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//spread operator - allows you to break out all the array elements in a new array.
const array = [7, 8, 9];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray);
const newArray = [1, 2, ...array];
console.log(newArray);
console.log(...newArray);
//you can manipulate
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
//does not create new variables only seperates variables that are seperated by commas =
//joining 2 arrays
const mainMenuCopy = [...restaurant.mainMenu];
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);
//itterables are arrays, strings, maps, sets, Not Objects.
const str = "Shon";
const letters = [...str, " ", "S"];
console.log(letters);
console.log(...str);
//Allowing you to spread out the three ingridients needed for the prompts that are used in
//deciding what the pasta will be using.
const ingredients = [
  //prompt("Let's make pasta! Ingredient 1?"),
  //prompt("Ingredient 2?"),
  //prompt("Ingredient 3"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//rest operator - uses same syntax of the spread but it packs in instead of expanding out
//rest is used on the left side of = and spread is on the right
const spreading = [1, 2, ...[3, 4]]; //spread
const [re, st, ...others] = [1, 2, 3, 4, 5]; //rest
console.log(re, st, others);
// rest element must be the very last element.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//resting with the weekends and weekdays
//the days outside of saturday have been grouped in one variable named weekdays which includes fri and thu
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//This function is allowing the data to be parsed over and then added to sum.
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
// passing list of elemnents will allow you to be able to understand and sum each group
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
//passing the variables as an array allowing us to write less code and still adding in multiple items.
const xyz = [23, 5, 7];
add(...xyz);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

//short circuiting - will return the truthy value that comes first
//use and return any data type
//OR will return the first true value
console.log("---- OR ----");
console.log(3 || "Shon"); // - 3
console.log("" || "Shon"); // - Shon
console.log(true || 0); // - true
console.log(undefined || null); // - null
console.log(undefined || 0 || "" || "Hello" || 23 || null); // = Hello
//looking to what the number of guests are if they exist. If they do not it will default to the default number which 10.
//zero will not return anything because it is seen as a false value. Solution will follow.
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
//numGuest is a false value so it will return the value of the secondary argument which is 10.
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log("---- AND ----");
//AND will return the fist false value
console.log(0 && "Shon");
console.log(7 && "Shon");
console.log("Hello" && 23 && null && "Shon");
//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
//if it does not exist it will clear the order and if it does exist it will run the code as expected.
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

//Nullish Coalescing Operator
//Recognizes nullish values such as null and undefined as false and 0, "empty strings" as true and will return them
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Logical Assignment Operators
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
//OR will return the first true value
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
// nullish assignment operator (null or undefined)
//Recognizes nullish values such as null and undefined as false and 0, "empty strings" as true and will return them
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// AND assignment operator
//AND will return the fist false value
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);
//For of Loop, faster way in order to complete the for loop
//you have the direct for loop for one item
const secMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of secMenu) console.log(item);
//taking the items in place to have a menu itemise by each number and not zero index
for (const [i, el] of secMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// //you are indexing the variable name to the name of the item.
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Optional Chaining
// WITH optional chaining the left of the question mark is read and if true = continue, false = undefined.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  //iterating over the array, you interate each day in the day slot.
  //you have the optional chaining ?. and then nullish coalescing ?? to clear the 0 being undefined
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
//Methods can be used, use the nullish in facto to make sure you return everything you are looking for.
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "shon", email: "hello@shon.io" }];
//const users = [];
//Optional chainging to see if array is empty, then return name and nullish cosc for the rest of the elements
console.log(users[0]?.name ?? "User array empty");

// Property NAMES
//you have the object and keys with the project. You list the keys which is the array
const properties = Object.keys(openingHours);
console.log(properties);
//iterating over the string for the literal.
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
//setting to a variable the values of the object and property.
const values = Object.values(openingHours);
console.log(values);

// Entire object
//transform values in an array that can be iterated over the array
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
//the actual iteration over the value and key from the object previously created.
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

//Sets - can only have unique items inside so that means no duplicates.
//most common iterable is that of an array as they can hold multiple data sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
/* sets do not have an index you can not retrieve info you can only see if it is in a set
console.log(ordersSet.size); //.size gives you the length of the set 
console.log(ordersSet.has('Pizza')); //checking if items are in the set
ordersSet.add('Garlic Bread'); //adding an item to a set.
ordersSet.delete('Risotto');//deleting an item from a set
ordersSet.clear();//delete all information from a set
*/
console.log(ordersSet);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
//unpacking the set into a new variable would give me the array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//maps - map values to keys, the keys have any types
//set method will allow you to create the new value. It will also return the map
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
//You can get information from a map by using the get Method
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));
//example - not best practice
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
//map also has size and clear as methods

// Maps: Iteration - key, value will create the body of the map.
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours)); //place object into the map creation
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
/*
arrays - need to manipulate data
sets - better for performance and when you need a unique list
objects - it is eaiers to access and write, when working with JSON files
maps - want to map values and want values that are not strings
*/
// Working With Strings - Part 1
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); //indexing within a string
console.log("B737"[0]); //indexing in a string

console.log(airline.length); // finding the length
console.log("B737".length);

console.log(airline.indexOf("r")); //returns the position
console.log(airline.lastIndexOf("r")); //will give you the last position, with duplicate characters
console.log(airline.indexOf("portugal")); //give you the word location as an index.
console.log(airline.slice(4)); //need indexes as arguments, starts at the index and moves forward, starts a new string
console.log(airline.slice(4, 7)); //gives you also the begginng and end and is not inclusive of the last index
console.log(airline.slice(0, airline.indexOf(" "))); //gets the first word, starting at zero and endig before the space
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //get the last word, starting at the last space to the end + 1 more character
console.log(airline.slice(-2)); //starts at the last two items and moves forward
console.log(airline.slice(1, -1)); //starts at one and stops before the last character

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
//boxing - JS in the background will take your string and place it in a box and create an object with it to be manipulated
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim(); //combining the two methods on the same string
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", "."); //first-what to place, second-replace with what?
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate")); //replaces the first door but leave the second
console.log(announcement.replaceAll("door", "gate")); //replaces all instances of the word door on the selected value
//console.log(announcement.replace(/door/g, "gate"));

// Booleans
const airbus = "Airbus A320neo";
console.log(airbus.includes("A320")); //is the string inside of the string
console.log(airbus.includes("Boeing"));
console.log(airbus.startsWith("Airb")); //does it start with the corresponding letters

if (airbus.startsWith("Airbus") && airbus.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// Split and join
console.log("a+very+nice+string".split("+")); //will split at the +
console.log("Jonas Schmedtmann".split(" ")); //will split at the space

const [firstName, lastName] = "Jonas Schmedtmann".split(" "); //assigning splits into two different variables

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" "); //will join and have a delimitor of space.
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" "); //creates a name array of the different parts
  const namesUpper = []; //creates a holding cell for the newly created array parts

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //creates the capitalized pieces to be added to namesUpper
  }
  console.log(namesUpper.join(" ")); //add everything back together with spaces in between
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding - allows you to create fluff in order to get a desired length, you choose the character to fluff with.
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+")); //the same but you will add to the end of the string instead
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5)); //to repeat and how often do you want to have the repeat

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
// String Methods Practice

const airportInfo =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of airportInfo.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
