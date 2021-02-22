'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // Create a second scope
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    //Create Block Scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      //The name is changed because the variable of firstName is in the same block, in the same scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // The scope of this add function is only in the block that is defined, making it a block scope because we are using strict mode
      function add(a, b) {
        return a + b;
      }
    }
    //Not able to access, only inside the block that it was created

    //console.log(str);

    //Can be accessed, variable declared with var are function scopes, and they ignore the block scope
    console.log(millenial);

    //Call it outside of the block, returns add is not defined
    console.log(add(2, 3));
  }

  printAge();

  return age;
}

//Global Variable
const firstName = 'Rudy';
calcAge(1990);

//Not able to access the age variable cause the scope chain

//console.log(age);

//Same goes for functions

//printAge();
