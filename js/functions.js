"use strict";

/**
 *
 * 'Create a function' called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the "passed in name.
 *
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello to " + name;
}


var helloMessage = sayHello("Ryan");
console.log(helloMessage);


var myName = "Dr. Frankenstein";
console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

function isTwo(number) {
    return number === 2;
}

console.log("Is 1 === 2 :" + isTwo(1));
console.log("Is 2 === 2 :" + isTwo(2));
console.log("Is 3 === 2 :" + isTwo(3));

console.log("The random number is: " + random);
console.log("It is " + isTwo(random) + " that the random number is 2.");

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

var total = prompt("What was the total price for the meal?");
var tipPercentage = prompt("What percent tip would you like to leave? Ex. enter 20 for 20%");

total = parseFloat(total);
tipPercentage = parseFloat(tipPercentage);

tipPercentage = tipPercentage / 100;

function calculateTip(tipPercentage, total) {
    return total * tipPercentage;
}

var tipAmount = calculateTip(tipPercentage, total);
var finalTotal = tipAmount + total;

alert("On a $" + total + " bill, with a " + tipPercentage + " tip, your total is: " + finalTotal.toFixed(2));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(price, percentage) {
    var discountAmount = price * percentage;
    var result = price - discountAmount;
    return result;
}

var originalPrice = parseFloat(prompt("What is the original price?"));
var discountPercentage = parseFloat(prompt("What is the discount percentage. Ex. 10 for 10%"));
discountPercentage = discountPercentage / 100;
var finalPrice = applyDiscount(originalPrice, discountPercentage);
alert("The final price after discount is: $" + finalPrice);
