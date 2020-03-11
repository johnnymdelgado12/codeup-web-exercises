'use strict';
//
// const wait = num => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, num)
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




fetch('https://api.github.com/users/johnnymdelgado12/events' , {headers: {'Authorization': gitHubToken}})
    .then(response=>{
        // console.log(response);
        return response.json();
    })
    .then(jsonResponse=>{
        // console.log(jsonResponse);
        return console.log(new Date(jsonResponse[0].created_at));
    });


// Add an input field and submit button (you will need to prevent the default behaviour if inside a form element) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.
//
$('.submit-form').click(e => {
    e.preventDefault();
    const userInput = $("#user-input").val().toLowerCase();
    fetch('data/profiles.json')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if (userInput === 'sandy123'){
                $('body').css('background-color', jsonResponse.sandy123)
            } else if (userInput === 'bob234'){
                $('body').css('background-color', jsonResponse.bob234)
            } else if (userInput === 'sally345'){
                $('body').css('background-color', jsonResponse.sally345)
            }
        })
        .catch($('body').css('background-color', 'rebeccapurple'))
});







