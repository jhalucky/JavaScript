const myName = 'Lucky';
// console.log(myName);

const yourName = new String('Ankur');
// console.log(yourName);

const myScore = 35;
// console.log(myScore);

const yourScore = new Number(54);
// console.log(yourScore);

// console.log(yourScore.toString().length);
// console.log(yourName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(yourScore.toFixed(2));


// const otherNumber = 23.66 // Output: 23.66
const otherNumber = 123.6623 // Output: 123.7
// console.log(otherNumber.toPrecision(4));

//Precision focuses on given range of values in above case it is '4'.

const zerosInNumber = 10000000;
// console.log(zerosInNumber.toLocaleString('en-INs'));

// ++++++++++ Maths ++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.min(5, 6, 9 , 12, 13, 35, 78, 3, 8, 0));
// console.log(Math.max(5, 6, 9 , 12, 13, 35, 78, 3, 8, 0));


console.log(Math.random());
console.log((Math.random()*100) + 1);
console.log(Math.floor(Math.random()*100) + 1);

const min = 35;
const max = 40;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
