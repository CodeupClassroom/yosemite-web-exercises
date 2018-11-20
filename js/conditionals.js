"use strict";

/**
 *
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function isNumeric(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

function isEven(input) {
    return input % 2 === 0;
}

function isPositive(input) {
    return input > 0;
}

function isNegative(input) {
    return input < 0;
}

function add100(number) {
    return 100 + parseFloat(number);
}

/*
 * First version of the solution
 */
var userWantsToEnterANumber = confirm("Would you like to enter a number?");
if(userWantsToEnterANumber) {
    var userNumber = prompt("Please input a number");

    // gives us a boolean if the userNumber is a number or numeric string
    if(isNumeric(userNumber)) {
        if(isEven(userNumber)) {
            alert(userNumber + " is even");
        } else {
            alert(userNumber + " is odd");
        }

        if(isPositive(userNumber)) {
            alert(userNumber + " is positive");
        } else if(isNegative(userNumber)) {
            alert(userNumber + " is negative");
        }

        alert(userNumber + " plus 100 is " + add100(userNumber));

    } else {
        alert("You did not input a valid number. Please refresh the page to try again.");
    }
} else {
    alert("Ok. You don't want to input a number.");
}


/**
 *
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     color = color.toLowerCase();
//     if(color === "red") {
//         return "roses are red";
//     } else if(color === "orange") {
//         return "orange you glad i didn't say banana";
//     } else if(color === "yellow") {
//         return "don't eat the yellow snow";
//     } else if(color === "green") {
//         return "green with envy";
//     } else if(color === "blue") {
//         return "blue as the wine dark Agean sea";
//     } else if(color === "indigo") {
//         return "that's the color of blue jeans";
//     } else if(color === "violet") {
//         return "Violet was in Willy Wonka";
//     } else {
//         return "I don't know that color";
//     }
// }


function analyzeColor(color) {
    switch(color) {
        case "red":
            return "roses are red";
        case "orange":
            return "orange you glad I didn't say banana";
        case "yellow":
            return "watch out where the huskies go and don't you eat that yellow snow.";
        case "green":
            return "Green energy!";
        case "blue":
            return "blue is the color of the ocean";
        case "indigo":
            return "Indigo girls rock!";
        case "violet":
            return "Violet was in Willy Wonka";
        default:
            return "I don't know that color.";
    }

}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


console.log(randomColor);

/**
 *
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));


/**
 *
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("What color do you want to analyze?");
console.log(analyzeColor(userColor));



/* ########################################################################## */

/**
 *
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 *
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
