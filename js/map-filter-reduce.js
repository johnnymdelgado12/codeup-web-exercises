'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

    // Exercises
//     // 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.


//     // 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let languagesKnown = users.filter(user => user.languages.length >= 3);

console.log(languagesKnown);


//     // 3. Use .map to create an array of strings where each element is a user's email address

let emails = users.map(user => user.email);

console.log(emails);

//     // 4. Use .reduce to get the total years of experience from the list of users.
//     Once you get the total of years you can use the result to calculate the average.

let totalXP = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(totalXP);
console.log((totalXP / users.length));

//     // 5. Use .reduce to get the longest email from the list of users.
//my solution
let longest = users.reduce((userA, userB) => userA.email.length > userB.email.length ? userA : userB);

console.log(longest.email);
//instructor solution
let longestEmail = users.reduce((currentLongest, user) => user.email.length > currentLongest.length ? user.email :
   currentLongest , 'i');

console.log(longestEmail);

//     // 6. Use .reduce to get the list of user's names in a single string.
//     Example: Your instructors are: ryan, luis, zach, fernando, justin.

let stringOfNames = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name,'');

console.log('Your instructors are: ' + stringOfNames);



