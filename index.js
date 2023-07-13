// ------------
// [Is Truthy]
//-------------

// set a variable that has the input value from the test list
const value = 0;

// print which exercise this is to console to make it easier to read the output
console.log("\n[Is Truthy] test variable is " + value + ":")

// check if the variable is "I am a string". If it is, then print "true" because it is truthy
if (value === "I am a string") {
  console.log("true");

  // if it's not a string check if it is the boolean false, then print "false"
} else if (value === false) {
  console.log("false");

  // if it's not either of those and it's null then print "The null value is falsy"
} else if (value === null) {
  console.log("The null value is falsy");

  // if it's none of the above and it's undefined then print "undefined is falsy"
} else if (value === undefined) {
  console.log("undefined is falsy");

  // if it's the number 0 it's falsy and print "The number 0 is falsy (the only falsy number)"
} else if (value === 0) {
  console.log("The number 0 is falsy (the only falsy number)");

// if it's the empty string "" print "The empty string is falsy (the only falsy string)"
} else if ( value === "") {
    console.log("The empty string is falsy (the only falsy string)")

} else {
    console.log("Hmmm that wasn't one of the examples")
}


// --------------
// [Number Line]
//---------------
// set two variables that have the input values from the test list
const num1 = -5;
const num2 = 0;

// print which exercise this is to console to make it easier to read the output
console.log("\n[Number Line] test variables are " + num1 + " and " + num2 + ":")

// add the two numbers together
const sum = num1 + num2;

// test one of the variables to see what evaluation we're using
// then check if the sum is greater than the number in the expected print output

// with variables 50 and 51 print "101 is greater than 100"
if ( num1 === 50 && sum > 100) {
    console.log("101 is greater than 100")

    // with variables 99 and -2 print "97 is greater than 0"
} else if  ( num1 === 99 && sum > 0) {
    console.log("97 is greater than 0")

// with variables 0 and 101 print "101 is greater than 100"
} else if ( num1 === 0 && sum > 100 ) {
    console.log("101 is greater than 100")

// with variables 500 and  -500 print "0 is equal to 0"  
} else if ( num1 === 500 && sum === 0 ) {
    console.log("0 is equal to 0")

// with variables -1000 and 0 print "-1000 is a negative number"
} else if ( num1 === -1000 && sum === -1000 ) {
    console.log("-1000 is a negative number")

// with variables -5 and 0 print "-5 is a negative number"
} else if ( num1 === -5 && sum === -5) {
    console.log("-5 is a negative number")

// and for fun three is the magic number (thank you De La Soul)
} else {
    console.log("Three is the magic number!")
}

// -----------------------
// [Number Line] version 2
// this can be written more succinctly doing only the
// comparison and using a variable for the sum
// in what is output to console
//------------------------

const v2num1 = -5
const v2num2 = 0

// print which exercise this is to console to make it easier to read the output
console.log("\n[Number Line v2] test variables are " + v2num1 + " and " + v2num2 + ":")

const v2sum = v2num1 + v2num2

if (v2sum > 100) {

    console.log(v2sum + " is greater than 100")

} else if ( v2sum > 0 ) {

    console.log(v2sum + " is greater than 0")

} else if ( v2sum === 0 ) {

    console.log(v2sum + " is equal to 0")

} else if ( v2sum < 0 ) {

    console.log(v2sum + " is a negative number")

}


// --------------
// [Greater than 5]
//---------------

// set two variables that have input values from the test list
const greater1 = 5
const greater2 = 5

// print which exercise this is to console to make it easier to read the output
console.log("\n[Greater than 5] test variables are " + greater1 + " and " + greater2 + ":")

// check whether the first variable is greater than 5 AND if the second one is greater than 5
 if ( greater1 >= 5 && greater2 >=5 ) {

    // print true if both values are greater than 5
    console.log(true)

    // print false if they're not
} else {
    console.log(false)
}

// -------------------
// [Pair and Compare]
//--------------------

// set four variables that match the input to test
param1A = "cake"
param1B = "cake"
param2A = "pie"
param2B = "pie"

// print which exercise this is to console to make it easier to read the output
console.log("\n[Pair and Compare] test variables are " + param1A + ", " + param1B + ", " + param2A + ", and " + param2B + ":")

// check if the first two variables are equal OR if the second two variables are equal
if ( param1A === param1B || param2A === param2B) {
    // and print true
    console.log(true)
}
else {
    // or false
    console.log(false)
}
