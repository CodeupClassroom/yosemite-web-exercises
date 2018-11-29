"use strict";

// iterating an array
var beatles = ["john", "paul", "george", "ringo", "yoko"];
// var i = 0;
// console.log(beatles[i]);
// i = 1;
// console.log(beatles[i]);
// i = 2;
// console.log(beatles[i]);
// i = 3;
// console.log(beatles[i]);

// iterating an array (with a loop)
// var index = 0;
// while(index < beatles.length) {
//     console.log(beatles[index]);
//     index++;
// }

// for(initializer, condition, iteration)
for(var i = 0; i < beatles.length; i++) {
    console.log("The Beatle at index " + i + " is " + beatles[i]);
}
console.log("------")
// how would we iterate an array in reverse order?
for(var i = beatles.length -1; i >= 0; i--) {
    console.log("The Beatle at index " + i + " is " + beatles[i]);
}

// tic tac toe board
var gameBoard = [
    [" ", " ", " "],
    [" ", "X", " "],
    [" ", " ", " "]
];

gameBoard[1][1] = "X";


var numbers = [5, 6, 7, 8];

// callback function runs on each element
// for each element, run this function
numbers.forEach(function(element, index, array) {
    console.log("The value at index " + index + " is " + element);
});

var languages = ["Haskell", "LISP", "Scheme", "ML", "JS", "Java", "MySQL", "Clojure"];
languages.forEach(function(language) {
    if(language === "LISP" || language === "JS") {
        console.log("OMG those are my fav!");
    }
    console.log(language);
});
