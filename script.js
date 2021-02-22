'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // Create a second scope
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();

  return age;
}

//Global Variable
const firstName = 'Rudy';
calcAge(1990);

//Not able to access the age variable cause the scope chain

console.log(age);

//Same goes for functions

printAge();
