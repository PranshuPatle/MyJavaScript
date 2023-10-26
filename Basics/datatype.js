"use strict" //treat the all js code as a new version of js 

// alert(3+3); we can't use this, because we are using node js not browser

// code should be readable, professional

// datatype - string, number - integer, float - integer, boolean

// Primitive Data Type
// number
// string
// boolean
// null - empty (standalone value)
// undefined 
// symbol (use for unique)

//Object 


// typeof - define the type of the value/data
console.log(typeof "gfhfghf"); // string datatype
console.log(typeof null); // type of null is object
console.log(typeof undefined); // type of undefined is undefined
console.log(typeof "");

////////////////////////////////////

let score1 = "44hghhg"; // NaN
let score2 = null; // value - 0

let score = undefined;

console.log(typeof score); // type is number
console.log(typeof {score}); // type is object
console.log(typeof (score)); // type is number

let numbervar = Number(score);
console.log(typeof numbervar);
console.log(numbervar); // NaN (not a number)

///////////////////////////////

let scoring = "5655ghghgh";

console.log(scoring);
console.log(typeof scoring);

//conversion

let numconversion = Number(scoring);

console.log(numconversion)
console.log(typeof numconversion)

///////////////////

let stringscoring 

console.log(stringscoring);
console.log(typeof stringscoring)

let stringcoversion = String(stringscoring)

console.log(stringcoversion);
console.log(typeof stringcoversion)

//////////////////

let booleanscoring 

console.log(booleanscoring)
console.log(typeof booleanscoring)

let booleanconversion = Boolean(booleanscoring)

console.log(booleanconversion)
console.log(typeof booleanconversion)

///////////////////////////////////////////////////

// OPERATIONS

// console.log(2+2)
// console.log(2-2)
// console.log (2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

// complex situation 

// assignment operator 

// postfix = incremental - x++ , decrement - x--
// prefix - ++x, --x

let xx = 3;
let yy = xx++;

console.log(xx + "  " + yy);

//////////////////////////////////////

let xy = 3;
let yz = ++xy;

console.log(xy + "  " + yz);

////////////////////////////////////////

//Comparison

///////////////////////////////////////

//Primitive & non-Primitive datatype - store & access data in memory

//call by value or call by reference

// number
// string
// boolean
// null - object
// undefined
// symbol - value unique - function

// Big Int - scientific value - function

// Array - function
// Object - function
// Function - function

//////////////////////////////////////

//symbol data type

let u_id = Symbol("123");

let l_id = Symbol("123");

console.log(u_id);
console.log(l_id);

console.log(u_id == l_id);

////////////////////////////////////////

let BigIntt = 867675564654564n;

console.log(BigIntt);

///////////////////////////////////////

console.log(typeof BigInt);
console.log(typeof Symbol);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Array);
console.log(typeof Object);
console.log(typeof Function);

////////////////////////////////////////

//Memory allocation

//stack Memory - primitive
//heap memory - nonprimitive

////////////////////////////////////////

//String










































