"use strict"

console.log("Hello from external Javascript");

// alert("Welcome To My Website!");

// var color = prompt("Whats your favorite color?")
//
// alert("Great, " + color + " is my favorite color too!!!")

// var lmRental = prompt("How long would you like to rent this movie for?");
//
// var brbRental = prompt("How long would you like to rent this movie for?");
//
// var herRental = prompt("How long would you like to rent this movie for?");
//
// var totalPrice =  (lmRental * 3 ) + (brbRental * 3) + (herRental * 3);
//
// alert("Your total price is " + "$" + totalPrice);

// var googleRate = 400;
//
// var amazonRate = 380;
//
// var facebookRate = 350;
//
// var googleHours = prompt("How many hours did you put in this week at Google?")
//
// var amazonHours = prompt("How many hours did you put in this week at Amazon?")
//
// var facebookHours = prompt("How many hours did you put in this week Facebook?")
//
// var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours)
//
// alert("Your total pay comes out to " + "$" + totalPay)

var classCapacity = prompt("How many students are enrolled in the class?")

var classStartTime = prompt("What time is your first class?")

// var classFull = classCapacity < 20;
//
// var classAtSameTime = classStartTime === 8;

var canEnroll = classCapacity < 20 && classStartTime !== 8

if (canEnroll === true) {
    alert("You can enroll in the course!")}

else
{
    alert("Sorry, you can not enroll in the course at this time.")

}





