"use strict";

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    //conducts a varibale lookup in order to find the missing variable in Gllobal Storage.
    let output = `You are ${firstName}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      //will take the path of least resistance and grab the variable that is the closes.
      //This will change the name from Shon to Steven becuase it is a local variable.
      const firstName = "Steven";
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //global variable do not effect local scope as they are ran in a different circle.
      const output = "Net Output";
    }
    console.log(millenial);
  }
  printAge();
  //remember to only use return at the end of the function body as it will stop the function from running the rest of the code.
  return age;
}
//Global execution of a variable. Can be used by all scopes below it in the execution context.
const firstName = "Shon";
calcAge(1991);
