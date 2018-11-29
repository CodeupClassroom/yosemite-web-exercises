function isNumeric (num) {
    return (!isNaN(parseFloat(num)))
}

var userInput;
do {
    userInput = prompt("Please enter an odd number between 1 and 50");
    userInput = parseFloat(userInput);
    // we want to keep asking until we get a good answer
    if (isNumeric(userInput)
        && userInput % 2 === 1
        && userInput >= 1
        && userInput <= 50) break;
} while (true)

console.log(userInput);

// Use a loop and the continue statement
// to output all the odd numbers between 1 and 50,
// except for the number the user entered.
for (var i = 1; i<=50; i+=2) {
    if (i === userInput) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}

