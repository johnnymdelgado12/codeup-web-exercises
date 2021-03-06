// (function() {

    // We can create an object with properties like so!
    // var kamea = {
    //     name: "Kamea",
    //     location: "San Antonio",
    //     colors: ["Black", "White"],
    //     species: "Orca",
    //     date_of_birth: new Date("12/6/2013")
    // };
    //
    // // We can also define property values to an object these two ways!
    // kamea.age = 6;
    // kamea["weight_in_lbs"] = 2400;
    //
    // var babyBeluga = {
    //     name: "Baby Beluga",
    //     location: "The Deep Blue Sea",
    //     colors: ["White"],
    //     species: "Beluga",
    //     age: 2,
    //     date_of_birth: new Date("2/6/2018")
    // };
    // // We can access the properties but using the following syntax.
    // console.log(kamea.age);
    //
    // console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");
    //
    // // Well, whales are neat and all, but what would be a more practical application for objects?
    //
    // var forecast = [
    //     {
    //         day: "Monday",
    //         summary: "Partly cloudy.",
    //         highsLows: {
    //             highActual: 92,
    //             highFeels: 96,
    //             lowActual: 72,
    //             lowFeels: 74
    //         },
    //         icon: "../img/part_cloud.jpg", // This will make more sense when we start talking about manipulating the page using JS.
    //         location: {
    //             lat: 30.2672,
    //             long: -97.7431,
    //             city: "Austin",
    //             state: "TX",
    //             country: "USA"
    //         }
    //     }, {
    //         day: "Tuesday",
    //         summary: "Sunny.",
    //         highsLows: {
    //             highActual: 99,
    //             highFeels: 99,
    //             lowActual: 76,
    //             lowFeels: 76
    //         },
    //         icon: "../img/sunny.jpg",
    //         location: {
    //             lat: 30.2672,
    //             long: -97.7431,
    //             city: "Austin",
    //             state: "TX",
    //             country: "USA"
    //         }
    //     }, {
    //         day: "Wednesday",
    //         summary: "Rainy.",
    //         highsLows: {
    //             highActual: 88,
    //             highFeels: 92,
    //             lowActual: 68,
    //             lowFeels: 66
    //         },
    //         icon: "../img/rain.jpg",
    //         location: {
    //             lat: 30.2672,
    //             long: -97.7431,
    //             city: "Austin",
    //             state: "TX",
    //             country: "USA"
    //         }
    //     }
    // ];
  
    // Notice with the method we used the "this" keyword. This allows us to have an object to reference itself when creating a method. It will not work when trying to define a property.

    // user.name = this.username; // This will give an error.
    //
    // console.log(user.name);

// })();

// #Loops, Arrays, & Objects
//
// ##Basic Review
//
//     1. What is an array in Javascript?
//      //A global object that is used in the construction of arrays; which are high level list like objects.
//     2. What is an object in Javascript?
//      //
//     3. What is the difference between an array and an object?
//
//     4. What is a property? A method?
//
//     5. Why are loops useful when dealing with arrays?
//
//     6. What is an index?
//
//     7. What is the difference between dot and bracket notation?
//
//
//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

        // filterNumbers(["fred", true, 5, 3]); //[3, 5]
// 1.write a function -> filterNumbers(array)
// 2.since we are returning an array we need an empty array ("bucket") --> var bucket = []
// 3.we need to loop to check each individual item in our array --> for || forEach
// 4.we need to check each item to see if its a number --> typeOf item === "number"
// 5. if the item is a number then we need to push it into the bucket
// 6. need to use .sort() method on the bucket array -- this is to sort in ascending order
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// 7. return bucket

function filterNumbers(array){
    let numberArray = [];
    array.forEach(function (num) {
        if (typeof (num) === "number"){
            numberArray.push(parseFloat(num));
        }
    });
    return numberArray.sort(function(a,b){
        return a - b;
    });
}

console.log(filterNumbers(["fred", true, 5, 3]));
console.log(filterNumbers([100, 1000000, false, "red", true, 50, 500000, 3]));


// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

// 1. write a function called --> getOlder(dogAge)
// 2. since we are taking in a array --> we have to loop through each dog --> dogAge.age +=1
// 3. return petAge


    var pets =

       [
        {
             name: "Chompers",
             breed: "Pug",
             age: 7
         },
         {
             name: "Freddy",
             breed: "Lab",
             age: 4
         },
         {
             name: "Mr. Pig",
             breed: "Mastiff",
             age: 10
         }
     ];


function getOlder(dogAge) {
    dogAge.forEach(function (petAge) {
        petAge.age +=1;
    });
    return  dogAge;
}

console.log(getOlder(pets));


// ```
   //  ```js
   //  //Example output
   //   [
   //      {
   //           name: "Chompers",
   //           breed: "Pug",
   //           age: 8
   //       },
   //       {
   //           name: "Freddy",
   //           breed: "Lab",
   //           age: 5
   //       },
   //       {
   //           name: "Mr. Pig",
   //           breed: "Mastif",
   //           age: 11
   //       }
   //   ];
   // ```

// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false


// 1. write a function called washCars(cars)
// 2. for each loop through wach car --> car.isDirty = false;
// 3. return cars

            var carList =
            [
                 {
                     make: 'Volvo',
                     color: 'red',
                     year: 1996,
                     isDirty: true
                 },
                 {
                     make: 'Toyota',
                     color: 'black',
                     year: 2004,
                     isDirty: false
                 },
                 {
                     make: 'Ford',
                     color: 'white',
                     year: 2007,
                     isDirty: true
                 }
            ];


//             function washCars(carArray){
//                 var bucket = [];
//                 carArray.forEach(function (car) {
//                     if (car.isDirty){
//                         bucket.push({make:car.make,color:car.color, year:car.year, isDirty:car = false})
//                     } else if (car.isDirty === false){
//                         bucket.push({make:car.make,color:car.color, year:car.year, isDirty:car.isDirty})
//                     }
//                 });
//                 return bucket
//             }
//
// console.log(washCars(cars));
//
            function washCars(cars){
                cars.forEach(function (car) {
                    car.isDirty = false;
                });
                return cars
            }

console.log(washCars(carList));

// ```js
    //         // Example output:
    //          [
    //              {
    //                  make: 'Volvo',
    //                  color: 'red',
    //                  year: 1996,
    //                  isDirty: false // changed to false
    //              },
    //              {
    //                  make: 'Toyota',
    //                  color: 'black',
    //                  year: 2004,
    //                  isDirty: false // stays the same
    //              },
    //              {
    //                  make: 'Ford',
    //                  color: 'white',
    //                  year: 2007,
    //                  isDirty: false // changed to false
    //              }
    //          ]
    // ```

// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

// PART 1 - COUNT
// 1. write a function called adminList(admin)

        var admins =
          [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             },
             {
                 isAdmin: false,
                 email: 'user3@email.com'
             }
         ];


        function adminList(users) {
            var trueAdmins=[];
            users.forEach(function (user) {
                if (user.isAdmin === true){
                    trueAdmins.push(users);
                }
            });
            return trueAdmins.length
        }
//
// console.log(adminList(admins));

//         function adminList(users){
//             var bucket = [];
//             users.forEach(function (admin) {
//                 if (admin.isAdmin === true){
//                     bucket.push(admin.email)
//                 }
//             });
//             return bucket;
//         }
//
//
// console.log(adminList(admins));

        function adminList(user) {
            var bucket = [];
            user.forEach(function (admin) {
                if (admin.isAdmin === true){
                    bucket.push(admin);
                }
            });
            return bucket;
        }

console.log(adminList(admins));

//     ```js
//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//     ```

// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects
// that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

// 1. make function called --> makeSandwichObjects(breads, fillings)
// 2. var bucket = [];
// 3. we have to loop --> for (var i = 0; i < breads.length; i++)
// 4. we need to create our sandwich object
// 5. bucket.push(sandwichObject)
// 6. return bucket

         var breadList  = [
             "white",
             "wheat",
             "rhy",
             "white"
         ];

         var fillingList = [
             "pb&j",
             "ham",
             "cheese steak",
             "tuna"
         ];


    function makeSandwichObjects(breads, fillings){
        var bucket = [];
        for (var i = 0; i < breads.length; i++){
            var sandwichObject = {
                bread: breads[i],
                filling: fillings[i]
            };
            bucket.push(sandwichObject)
        }
        return bucket
    }

console.log(makeSandwichObjects(breadList, fillingList));

//
    //      makeSandwichObjects(breads, fillings) // example call to the function
    //
    // ```js
    //     // Example Output:
    //        [
    //          {
    //              bread: "white",
    //              filling: "pb&j"
    //          },
    //          {
    //              bread: "wheat",
    //              filling: "ham"
    //          },
    //          {
    //              bread: "rhy",
    //              filling: "cheese steak"
    //          },
    //          {
    //              bread: "white",
    //              filling: "tuna"
    //          }
    //      ]



// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"

function keepYellow (str){
    var bucket = [];
    str.forEach(function (yellow) {
        if (yellow.toLowerCase() === "yellow"){
            bucket.push(yellow)
        }
    });
    return bucket;
}

console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));



