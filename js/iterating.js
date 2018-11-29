(function(){
    "use strict";

    var names = [
        "Margaret Hamilton",
        "Sandi Metz",
        "Admiral Dr. Grace Hopper",
        "Ada Lovelace",
        "Frances Buontempo"
    ];

    console.log("The number of names on the array is " + names.length);

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    // for(var i = 0; i < names.length; i++) {
    //     console.log(names[i]);
    // }

    names.forEach(function(element) {
        console.log(element);
    });

    console.log("-----");

    function first(array) {
        return array[0];
    }

    function second(array) {
        return array[1];
    }

    console.log(first(names));

    console.log(second(names));

    function last(array) {
        if(Array.isArray(array)) {
            return array[array.length - 1];
        }
    }

    function secondToLast(array) {
        return array[array.length - 2];
    }


    // Write a function named oneHundred() that returns an array of integers
    // starting at 1 and ending at 100;

    function oneHundred() {
        var array = [];
        for(var i = 0; i <= 99; i++) {
            array[i] = i+1;
        }
        return array;
    }


    var array = oneHundred();

    // Exercise 2:
    // Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.
    function reverse(input) {
        var output = [];
        for(var i = input.length - 1; i >= 0; i--) {
            output.push(input[i]);
        }
        return output;
    }

    console.log(reverse(oneHundred()));

    //     Exercise 3:
    // Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100
    function sumAll(numbers) {
        var sum = 0;
        numbers.forEach(function(number) {
           sum = sum + number;
        });
        return sum;
    }

    // Exercise 4:
    // Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100
    function multiplyAll(numbers) {
        var product = 1;
        numbers.forEach(function(number) {
            product *= number;
        });
        return product;
    }

    console.log(multiplyAll(oneHundred()));

    console.log(multiplyAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


})();
