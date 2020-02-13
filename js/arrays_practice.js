"use strict"

// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.
//
//     Given:
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
//


// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// //
// // function allIndexesOf(array,input) {
// //     var returnMessage = "";
// //     if(input){
// //         returnMessage = fruits.indexOf(input);
// //     } else if(input !== array){
// //         returnMessage = [];
// //     }
// //     return returnMessage
// // };
// //
// // console.log(allIndexesOf(fruits, "tomato"));

//1. need to determine how many cones i have to sell today

//2. need to determine how many cones the customer wants to buy

//3. need to make sure i have enough cones to sell

//4. need to subtract the cones sold from my remaining cones

//5. log out when im done selling cones

// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log(allCones);
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (allCones < conesBought){
//         console.log("sorry, I can't sell you, " + conesBought + " I only have " + allCones + " left");
//     } else if (allCones > conesBought) {
//         allCones = allCones - conesBought;
//         console.log(conesBought + " sold! " + allCones + " remaining!");
//     } else{
//         allCones = allCones - conesBought;
//         console.log("Finally: " + allCones);
//         console.log("Yay! I sold them al!");
//     }
// } while (allCones > 0);



// function showMultiplicationTable(num) {
//     for (var i = 1; i <= 10; i++) {
//         var product = num * i;
//         console.log(num + " X " + i + " = " + product);
//     }
// }
//
// console.log(showMultiplicationTable(5));


// * TODO:
// * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//     * would like to enter a number. If they click 'Ok', prompt the user for a
//     * number, then use 3 separate alerts to tell the user:
//     *
// * - whether the number is even or odd
// * - what the number plus 100 is
// * - if the number is negative or positive
// *
// * if what the user enters is not a number, use an alert to tell them that, and
// * do *not* display any of the above information.
// *
// * Can you refactor your code to use functions?
// *
// */

var willContinue = confirm("Would you like to enter a number?");

if (willContinue){
    var userInput = parseFloat(prompt("What is your number?"));
    var isNum = !isNaN(userInput);
    if (isNum){
        } if (userInput % 2 === 0){
            alert("Your number is even!")
        } else {
            alert("Your number is odd!")
        } if (userInput > 0) {
            alert("Your number is positive!")
        } else {
        alert("your number is is negative!")
    }
} else {
    alert("that is not a number!")
}
    alert("Your number + 100 is " + ((userInput) + (100)));
