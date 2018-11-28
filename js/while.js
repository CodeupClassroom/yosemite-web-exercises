"use strict";

function powersOfTwo() {
    // var num = 1;
    // while (num < 65536) {
    //     num *= 2;
    //     console.log(num);
    // }
    var exp = 1;
    while (exp < 17) {
        console.log(1<<exp);
        exp++;
    }

}

// powersOfTwo()

var iceCream = function () {
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("We are starting with " + allCones + " cones.");
    do {
        var customerWants = Math.floor(Math.random() * 5) + 1;
        if (allCones >= customerWants) {
            //sell cones
            allCones -= customerWants;
            console.log(customerWants + " cones sold...");
        } else {
            //no deal
            console.log("Cannot sell you "+ customerWants + " cones I only have "+allCones +"...")
        }
    } while (allCones > 0)
    console.log("Yay! I sold them all!");
}

iceCream();

