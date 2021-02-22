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
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    //Not able to access, only inside the block that it was created

    //console.log(str);

    //Can be accessed, variable declared with var are function scopes, and they ignore the block scope
    console.log(millenial);
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
