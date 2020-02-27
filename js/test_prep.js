"use strict"

// // Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
//
// function isPositiveOdd(num) {
//     return (parseFloat(num) % 2 !== 0) && (parseFloat(num) >= 0);
// }
//
//
// console.log(isPositiveOdd(3));
//
//
// // Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
//
// function reverseSign(num) {
//     return parseFloat(num) * -1;
// }
//
// console.log(reverseSign(-5));
//
// // Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
//
// function absoluteValue(num) {
//     return Math.abs(num);
// }
//
// console.log(absoluteValue(-27));
//
// // Write a function definition named cube that takes in a number and returns the number times itself, times itself.
//
// function cube(num) {
//     return num ** 3;
// }
//
// console.log(cube(3));
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
//
// //need to confirm user wants to enter number
// var willContinue = confirm("Would you like to enter a number?")
//
// //need to make sure input is a number
// function isNumfunc(numInput) {
//     return !isNaN(numInput);
// }
//
// //need to see if number is odd or even
// function isEven(numInput) {
//     return parseFloat(numInput) % 2 === 0;
// }
//
// //need to see if number is positive or negative
// function isPositive(numInput) {
//     return parseFloat(numInput) >= 0;
// }
//
// //need to add 100 to number
// function plusHundred(numInput) {
//     var userNum = parseFloat(numInput)
//     var returnString =  "Your number plus 100 is: " + (parseFloat(userNum) + 100);
//     return returnString
// }
//
// function mainFunction(willContinue) {
//     if (willContinue){
//         var userInput = parseFloat(prompt("What number would you like to enter?:"));
//         if(isNumfunc(userInput)) {
//             var isEvenMessage = isEven(userInput) ? "Your number is even" : "Your number is odd";
//             alert(isEvenMessage)
//             var isPositiveMessage = isPositive(userInput) ? "Your number is positive" : "your number is negative";
//             alert(isPositiveMessage);
//             alert(plusHundred(userInput));
//         } else {
//             alert("That is not a number!")
//         }
//     }
// }
//
// console.log(mainFunction(willContinue));
//
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//
//
//
// function colorFunction(colorInput) {
//     var colormessage = ""
//     if(colorInput === "blue") {
//         colormessage = "Blue is the color of the sky!"
//     } else if (colorInput === "red") {
//         colormessage = "Strawberries are red!"
//     } else if (colorInput === "cyan") {
//         colormessage = "I dont know anything about cyan!"
//     } else {
//         colormessage = "That is not a color I know"
//     }
//     return colormessage
// }
//
// console.log(colorFunction(randomColor));
//
// function colorSwitch(color) {
//
//     var colorMessage = "";
//
//     switch (color) {
//         case "blue":
//             colorMessage = "Blue is the color of the sky!";
//             break;
//         case "red":
//             colorMessage = "Strawberries are red!";
//             break;
//         case "cyan":
//             colorMessage = "I dont know anything about cyan!";
//             break;
//         default:
//             colorMessage= "That is not a color I know"
//     }
//     return colorMessage
// }
//
// console.log(colorSwitch("blue"));
//
// /**
// * TODO:
//     * Suppose there's a promotion in Walmart, each customer is given a randomly
// * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// * all for free!.
// *
// * Write a function named `calculateTotal` that accepts a lucky number and total
// * amount, and returns the discounted price.
// *
// * Example:
// * calculateTotal(0, 100) // returns 100
// * calculateTotal(4, 100) // returns 50
// * calculateTotal(5, 100) // returns 0
// *
// * Test your function by passing it various values and checking for the expected
// * return value.
//     */
//
//
//
// function calculateTotal(luckyNumber,totalAmount) {
//     var discountRate = parseFloat(0);
//     switch (luckyNumber) {
//         case 0:
//             discountRate = parseFloat(0);
//             break;
//         case 1:
//             discountRate = parseFloat(.10);
//             break;
//         case 2:
//             discountRate = parseFloat(.25);
//             break;
//         case 3:
//             discountRate = parseFloat(.35);
//             break;
//         case 4:
//             discountRate = parseFloat(.5);
//             break;
//         case 5:
//             discountRate = parseFloat(1)
//             break;
//     }
//     return totalAmount - (discountRate * totalAmount)
// }
//
// console.log(calculateTotal(4, 100));
//write a function named isNegative
// function isNegative(num) {
//     return parseFloat(num) < 0;
// }
//
// console.log(isNegative(5));
//
// function isTen(num) {
//     return parseFloat(num) === 10
// };
//
// console.log(isTen(10));
//
// function double(num) {
//     return Math.pow(parseFloat(num),2);
// }
//
// console.log(double(2));
//
// function remove3s(number) {
//     var numberArray = [];
//     number.forEach(function (num) {
//         if (num !==3){
//             numberArray.push(num)
//         }
//     });
//     return numberArray
// }
//
// console.log(remove3s([1, 2, 3, 4, 5, 3]));
//
//
//
// function sumAll(numbers){
//     var ourSum = [];
//
//     for(var i = 0; i < numbers.length; i++){
//         ourSum = ourSum + numbers[i];
//     }
//     return ourSum
// }
//
//
// console.log(sumAll([1, 2, 3, 4]));
//
// //write a function named countEvens that accepts an array of nums and returns the number of even numbers in the array.
// //write a function named countEvens
// //parameter is an array
// //empty bucket called evenNumbers (or whatever you want to name it)
// //create a loop to iterate an array
//
//
// // function countEvens(arr) {
// //     var evenNumbers = 0;
// //
// //     arr.forEach(function (x) {
// //     if(x % 2 === 0){
// //         evenNumbers++;
// //     }
// //     })
// //     return evenNumbers;
// // }
// // countEvens()
//
// function stringLength(str) {
//     if(typeof str === "string"){
//         return str.length;
//     }else {
//         return false;
//     }
// }
//
// console.log(stringLength("johnny"));


// function increment(input){
//     if (!isNaN(parseFloat(input))){
//         return (input + 1);
//     } else{
//         return false;
//     }
// }
//
// console.log(increment(4));

// function add(input1, input2) {
//     if (!isNaN(parseFloat(input1)) && !isNaN(parseFloat(input2))){
//         return Number(input1) + Number(input2);
//     } else {
//         return false;
//     }
// }
//
// console.log(add("2", "3"));

// function sumOfSquares(input1, input2) {
//     if (!isNaN(parseFloat(input1)) && !isNaN(parseFloat(input2))){
//         return (parseFloat(input1) * parseFloat(input1)) + (parseFloat(input2) * parseFloat(input2));
//     } else {
//         return false;
//     }
// }
//
// console.log(sumOfSquares(2, 3));

// function getHighestNumber(input1, input2, input3) {
//     if (!isNaN(parseFloat(input1)) && !isNaN(parseFloat(input2)) && !isNaN(parseFloat(input3))) {
//         return Math.max(input1, input2, input3)
//     }else {
//             return false;
//         }
// }
//
// console.log(getHighestNumber(1, 7, 3));





