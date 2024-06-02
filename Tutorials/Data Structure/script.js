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
