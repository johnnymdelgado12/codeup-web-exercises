'use strict';

//
// const wait = new Promise((resolve) => {
//     if (1000){
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     }
// });

// function wait(num) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, num)
//     })
// }

const wait = num => {
    return new Promise((resolve) => {
        setTimeout(resolve, num)
    })
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


fetch(url, {headers: {'Authorization': gitHubToken}});

