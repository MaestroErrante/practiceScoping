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
