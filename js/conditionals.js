"use strict";

/**
 * TODO:
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
 *
 */

// var verify = confirm("Would you like to enter a number?")
//
// if (verify === true){
//
//     var promptedNumber = Number(prompt("What is your number?"));
//     var numberPlusHundred = promptedNumber + 100;
//     var oddEven = promptedNumber % 2 === 0;
//     var positiveNegative = promptedNumber > 0;
//
//     if(oddEven === true) {
//         alert("Your number is even!")
//         alert("Your number plus 100 is: " + numberPlusHundred)
//     } else {
//         alert("Your number is odd")
//         alert("Your number plus 100 is: " + numberPlusHundred)
//     }
//
//     if(positiveNegative === true) {
//         alert("Your number is positive")
//     } else {
//         alert("Your number is negative")
//     }
//
// } else {
//     alert("To bad")
// }

var willContinue = confirm("Would you like to enter a number?")
var isNum = !isNaN(willContinue)






//instructor walkthrough

// var willContinue = confirm("Would you like to enter a number?")
//
// if(willContinue) {
//     //prompt for a number
//     var userInput = prompt("What number would you like to enter?")
//
//     var isNum = !isNaN(userInput);
//
//     if(isNum) { // isNum is true
//                 // we know we have a real number
//         if(userInput % 2 === 0) {
//             alert("number is even")
//         } else {
//             alert("Number is odd")
//         }
//         var userNum = parseFloat(userInput);
//         alert("your number plus 100 = " + (userNum + 100));
//     } if(userInput < 0) {
//         alert("your number is negative")
//     } else if ( userInput > 0) {
//         alert("your number is positive")
//     }
// }else {
//     alert("That is not a number")
//
// }




/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
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


function analyzeColor (color) {
    if (color === "blue") {
        return "blue is the color of the sky"
    } else if (color === "red"){
        return "strawberries are red"
    } else if (color === "cyan") {
        return "I don't know anything about cyan"
    } else {
        return "That is not a color I know about"
    }
}

console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor (color) {
//     if (color === "blue") {
//         return "blue is the color of the sky"
//     } else if (color === "red"){
//         return "strawberries are red"
//     } else if (color === "cyan") {
//         return "I don't know anything about cyan"
//     } else {
//         return "That is not a color I know about"
//     }
// }
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor (color) {
//     switch (color) {
//         case "blue":
//             return "blue is the color of the sky";
//             break;
//         case "red":
//             return "strawberries are red";
//             break;
//         case "cyan":
//             return "I don't know anything about cyan";
//             break;
//         default:
//             return "That is not a color I know about";
//             break;
//     }
// }
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var color = prompt("what is your favorite color?")
//
// function analyzeColor (color) {
//     switch (color) {
//         case "blue":
//             alert("blue is the color of the sky");
//             break;
//         case "red":
//             alert ("strawberries are red");
//             break;
//         case "cyan":
//             alert("I don't know anything about cyan");
//             break;
//         default:
//             alert("That is not a color I know about");
//             break;
//     }
// }
//
// analyzeColor(color)

/* ########################################################################## */

/**
 * TODO:
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

// function calculateTotal(luckyNumbers){
//     var originalPrice = parseFloat(prompt("What is the price of your items?"));
//     var tenPercentDiscount = originalPrice - (originalPrice * .10);
//     var twentyfivePercentDiscount = originalPrice -(originalPrice * .25);
//     var thirtyfivePercentDiscount = originalPrice - (originalPrice * .35);
//     var fiftyPercentDiscount = originalPrice - (originalPrice * .5);
//     var free = originalPrice - originalPrice
//     var noDiscount = "Sorry no discount, "
//     var finalPrice
//     switch (luckyNumbers) {
//         case 1:
//            finalPrice = "your price is $" + tenPercentDiscount;
//            break;
//         case 2:
//             finalPrice = "your price is $" + twentyfivePercentDiscount;
//             break;
//         case 3:
//             finalPrice = "your price is $" + thirtyfivePercentDiscount;
//             break;
//         case 4:
//             finalPrice = "Your price is $" + fiftyPercentDiscount;
//             break;
//         case 5:
//             finalPrice = "Your price is $" + free
//             break;
//         default: finalPrice = noDiscount + " Your price is $" + originalPrice
//     }
//     return finalPrice;
// }
//
// console.log(calculateTotal(luckyNumber));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNumbers){
    var originalPrice = parseFloat(prompt("What is the price of your items?"));
    var tenPercentDiscount = originalPrice - (originalPrice * .10);
    var twentyfivePercentDiscount = originalPrice -(originalPrice * .25);
    var thirtyfivePercentDiscount = originalPrice - (originalPrice * .35);
    var fiftyPercentDiscount = originalPrice - (originalPrice * .5);
    var free = originalPrice - originalPrice
    var noDiscount = "Sorry no discount, "
    var finalPrice = ""
    switch (luckyNumbers) {
        case 1:
            finalPrice = "your price is $" + tenPercentDiscount + " with your discount!";
            break;
        case 2:
            finalPrice = "your price is $" + twentyfivePercentDiscount + " with your discount!";
            break;
        case 3:
            finalPrice = "your price is $" + thirtyfivePercentDiscount + " with your discount!";
            break;
        case 4:
            finalPrice = "Your price is $" + fiftyPercentDiscount + " with your discount!";
            break;
        case 5:
            finalPrice = "Your price is $" + free + " congratulations!!!"
            break;
        default: finalPrice = noDiscount + " Your price is $" + originalPrice
    }
    return finalPrice;
}

// console.log(calculateTotal(luckyNumber));;
alert(calculateTotal(luckyNumber))