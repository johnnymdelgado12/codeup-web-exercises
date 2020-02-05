"use strict"
//
// console.log("Hello from external Javascript");
//
// alert("Welcome To My Website!");
//
// var color = prompt("Whats your favorite color?")
//
// alert("Great, " + color + " is my favorite color too!!!")
//
// var lmRental = prompt("How long would you like to rent The Little Mermaid for?");
//
// var brbRental = prompt("How long would you like to rent Brother Bear for?");
//
// var herRental = prompt("How long would you like to rent Hercules for?");
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

// var classCapacity = prompt("How many students are enrolled in the class?")
//
// var classStartTime = prompt("What time is your first class?")
//
//
// var canEnroll = classCapacity < 20 && classStartTime != 8
//
// if (canEnroll === true) {
//     alert("You can enroll in the course!")}
//
// else
// {
//     alert("Sorry, you can not enroll in the course at this time.")
//
// }
//
//
//
// var classIsNotFull = confirm("Class is not full");
//
// var noScheduleConflicts = confirm("Schedules do not conflict");
//
// var studentEnrollment = classIsNotFull && noScheduleConflicts
//
// alert("Student can enroll: " + studentEnrollment)



//class registration instructor walkthrough



var numberOfItems = Number(prompt("How many items are you buying?"));

var offerIsValid = confirm("Is the offer valid?");

var isPremiumMember = confirm("Are you a premium member?");

var discountAppliedStatus = offerIsValid && (isPremiumMember || numberOfItems >= 2);

alert("Can use discount " + discountAppliedStatus);









