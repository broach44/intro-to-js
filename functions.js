console.log('FUNctions');

const fancyFunction =(something) => {
    return something + 'fancy';
}

const output = fancyFunction('michael is ');
console.log(output);

// let firstName = 'Crystal';
// let lastName = 'Broach';
// console.log(`${firstName} + ${lastName}`)

// let firstName = 'Bill';
// let lastName = 'Weasley';

// console.log(`${firstName} + ${lastName}`)

// let firstName = 'Ginny';
// let lastName = 'Weasley';

// console.log(`${firstName} + ${lastName}`)

const sayMyName = (first, last) => {
    //do something
    return `${first} ${last}`;
}

console.log(sayMyName('John', 'Smith'));


// NUGGET TIME

// const nuggetizer = (animal) => {
//     return `nugget ${animal}`;
// }

// const humaneNuggetizer = (animal) => {
//     return animal;
// }

// const spamFactory = (literallyAnything) => {
//     return 'spam (lunch)';
// }

// console.log(nuggetizer('chicken'));
// console.log(nuggetizer('octopus'));
// console.log(nuggetizer('john wark'));

// console.log(humaneNuggetizer('chicken'));
// console.log(humaneNuggetizer('octopus'));
// console.log(humaneNuggetizer('john wark'));

// console.log(spamFactory('chicken'));
// console.log(spamFactory('octopus'));
// console.log(spamFactory('john wark'));

// TAKE A NUMBER

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
}

let bandNumber = 1

const takeNumber =  (bandName) => {
  /*
    Write your awesome code here. See comments
    below for what should be returned.
  */
  printToDOM(`<h3>${bandNumber}. ${bandName}<h3>`);
  bandNumber++;
  // you should already have this function written from the class lecture
};

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM



