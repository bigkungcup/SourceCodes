// The following let variables are defined in the global scope
let mid = 20;
let final = 5;

let fname = "Ada";

//sum function is defined in the global scope
function sum() {
  return mid + final;
}

console.log(`#1 sum: ${sum()}`); // Returns 25
mid = 10;
console.log(`#2 sum: ${sum()}`); // Returns 15

function getScore() {
  let mid = 10;
  let final = 30;
  //yourScore is nested function example
  function yourScore() {
    return fname + " scored " + (mid + final);
  }

  return yourScore();
}

console.log(getScore()); // Returns "Ada scored 40"

let greeting = "Welcome everyone in family";

function outer(name) {
  //higher order function

  let family = [];

  family.unshift(name);

  //inner is a closure function

  function inner(newMember) {
    console.log(greeting);

    family.unshift(newMember);

    return family;
  }

  return inner; //return inner function
}

const myInner = outer("Umaporn");

console.log(myInner("John"));

console.log(myInner("SuSan"));

// !