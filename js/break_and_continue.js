"use strict"


// do {
//     var userInput = prompt("Enter an odd number between 1 and 50");
//     var correctNumber = userInput % 2 !== 0 && userInput < 50;
//     console.log(userInput);
// } while (!correctNumber);

//first problem **********************************************************


do {
    var userNumber = parseFloat(prompt("Please enter a number between 1 and 50"))

    if(userNumber <1 || userNumber > 50){
        alert("User number is not between 1 and 50, please enter again");
    } else if(userNumber % 2 === 0){
        alert("User number is not odd, please enter again");
    } else if (isNaN(userNumber)){
        alert("That is not a number, please enter again");
    } else {
        alert("Congratulations! You picked the right number");
        break;
    }

}while (true);

//second problem *********************************************************

for (var i = 1; i <= 50; i++){
    if (i % 2 === 0){
        continue;
    }
    if (i === userNumber){
        console.log("Yikes! Skipping that number: " + userNumber);
    } else {
        console.log("Here is an odd number: " + i);
    }
}