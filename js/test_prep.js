"use strict"

// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

function isPositiveOdd(num) {
    return (parseFloat(num) % 2 !== 0) && (parseFloat(num) >= 0);
}


console.log(isPositiveOdd(3));


// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.

function reverseSign(num) {
    return parseFloat(num) * -1;
}

console.log(reverseSign(-5));

// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number

function absoluteValue(num) {
    return Math.abs(num);
}

console.log(absoluteValue(-27));

// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

function cube(num) {
    return num ** 3;
}

console.log(cube(3));

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
 */


//need to confirm user wants to enter number
var willContinue = confirm("Would you like to enter a number?")

//need to make sure inoput is a number
function isNumfunc(numInput) {
    return !isNaN(numInput);
}

//need to see if number is odd or even
function isEven(numInput) {
    return parseFloat(numInput) % 2 === 0;
}

//need to see if number is positive or negative
function isPositive(numInput) {
    return parseFloat(numInput) >= 0;
}

//need to add 100 to number
function plusHundred(numInput) {
    var userNum = parseFloat(numInput)
    var returnString =  "Your number plus 100 is: " + (parseFloat(userNum) + 100);
    return returnString
}

function mainFunction(willContinue) {
    if (willContinue){
        var userInput = parseFloat(prompt("What number would you like to enter?:"));
        if(isNumfunc(userInput)) {
            var isEvenMessage = isEven(userInput) ? "Your number is even" : "Your number is odd";
            alert(isEvenMessage)
            var isPositiveMessage = isPositive(userInput) ? "Your number is positive" : "your number is negative";
            alert(isPositiveMessage);
            alert(plusHundred(userInput));
        } else {
            alert("That is not a number!")
        }
    }
}

console.log(mainFunction(willContinue));


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
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];




function colorFunction(colorInput) {
    var colormessage = ""
    if(colorInput === "blue") {
        colormessage = "Blue is the color of the sky!"
    } else if (colorInput === "red") {
        colormessage = "Strawberries are red!"
    } else if (colorInput === "cyan") {
        colormessage = "I dont know anything about cyan!"
    } else {
        colormessage = "That is not a color I know"
    }
    return colormessage
}

console.log(colorFunction(randomColor));

function colorSwitch(color) {

    var colorMessage = "";

    switch (color) {
        case "blue":
            colorMessage = "Blue is the color of the sky!";
            break;
        case "red":
            colorMessage = "Strawberries are red!";
            break;
        case "cyan":
            colorMessage = "I dont know anything about cyan!";
            break;
        default:
            colorMessage= "That is not a color I know"
    }
    return colorMessage
}

console.log(colorSwitch("cyan"));