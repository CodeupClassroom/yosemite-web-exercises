"use strict";
console.log("Hello from the external JavaScript file");
alert("Welcome to my website!");

var favoriteColor = prompt("What's your favorite color?");
alert("Great! " + favoriteColor + " is my favorite color, too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var pricePerDay = prompt("What is the price per day to rent a movie?");
var littleMermaidDays = prompt("How many days did you keep The Little Mermaid?");
var herculesDays = prompt("How many days did you keep Hercules?");
var brotherBearDays = prompt("how many days did you keep Brother Bear?");

var total = pricePerDay*littleMermaidDays + pricePerDay*herculesDays + pricePerDay * brotherBearDays;
console.log("Your total movie rental cost is $" + total);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googleRate = prompt("What is google's hourly contractor rate?");
var googleHours = prompt("How many hours did you work for Google?");
var facebookRate = prompt("What is Facebook's hourly contractor rate?");
var facebookHours = prompt("How many hours did you work for Fa  cebook?");
var amazonRate = prompt("What is Amazon's hourly rate?");
var amazonHours = prompt("How many hours did you work for Amazon?");

var accountsReceivable = amazonHours*amazonRate + facebookHours*facebookRate + googleHours*googleRate;
console.log("After working " + (parseFloat(amazonHours) + parseFloat(googleHours) + parseFloat(facebookHours)) + " hours at 3 different companies, I made $" + accountsReceivable );

// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classHasSpace = confirm("Does the class have space?");
var worksWithSchedule = confirm("Does the class work with the student's schedule?");
var canBeEnrolled = classHasSpace && worksWithSchedule;
console.log("It is " + canBeEnrolled + " that I can enroll in that class");

// A product offer can be applied only if people buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
var numberOfItemsPurchased = prompt("How many items did you purchase?");
var isPremiumMember = confirm("Are you a premium member?");
var offerStillValid = confirm("Is the offer still valid?");
var offerCanBeApplied = offerStillValid && (numberOfItemsPurchased > 2 || isPremiumMember);

console.log("It is " + offerCanBeApplied + " that the offer can be applied.");

