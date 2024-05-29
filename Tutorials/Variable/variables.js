"use strict";
// console.log(me);
// console.log(job);
// console.log(birthyear);

// var me = "Shon";
// //Still in the temporal deadzone but it will not run the birthyear variable because it can not get by the job variabl
// let job = "accountant";
// const birthyear = 1995;

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}
