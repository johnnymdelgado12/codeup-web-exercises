(function() {

    // We can create an object with properties like so!
    var kamea = {
        name: "Kamea",
        location: "San Antonio",
        colors: ["Black", "White"],
        species: "Orca",
        date_of_birth: new Date("12/6/2013")
    };

    // We can also define property values to an object these two ways!
    kamea.age = 6;
    kamea["weight_in_lbs"] = 2400;

    var babyBeluga = {
        name: "Baby Beluga",
        location: "The Deep Blue Sea",
        colors: ["White"],
        species: "Beluga",
        age: 2,
        date_of_birth: new Date("2/6/2018")
    };
    // We can access the properties but using the following syntax.
    console.log(kamea.age);

    console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");

    // Well, whales are neat and all, but what would be a more practical application for objects?

    var forecast = [
        {
            day: "Monday",
            summary: "Partly cloudy.",
            highsLows: {
                highActual: 92,
                highFeels: 96,
                lowActual: 72,
                lowFeels: 74
            },
            icon: "../img/part_cloud.jpg", // This will make more sense when we start talking about manipulating the page using JS.
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, {
            day: "Tuesday",
            summary: "Sunny.",
            highsLows: {
                highActual: 99,
                highFeels: 99,
                lowActual: 76,
                lowFeels: 76
            },
            icon: "../img/sunny.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, {
            day: "Wednesday",
            summary: "Rainy.",
            highsLows: {
                highActual: 88,
                highFeels: 92,
                lowActual: 68,
                lowFeels: 66
            },
            icon: "../img/rain.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }
    ];
  
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

function filterNumbers(array){
    var numberArray = [];
    array.forEach(function (num) {
        if (num !== isNaN()){
            numberArray.push(parseFloat(num))
        }
    });
    return numberArray
}

console.log(filterNumbers(["fred", true, 3, 5]));

// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.


    // var pets:
    //
    //    [
    //     {
    //          name: "Chompers",
    //          breed: "Pug",
    //          age: 7,
    //      },
    //      {
    //          name: "Freddy",
    //          breed: "Lab",
    //          age: 4
    //      },
    //      {
    //          name: "Mr. Pig",
    //          breed: "Mastif",
    //          age: 10
    //      }
    //  ];
    //


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

    ```js
            // Example input
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
            ]
      ```

    ```js  
            // Example output:
             [
                 {
                     make: 'Volvo',
                     color: 'red',
                     year: 1996,
                     isDirty: false // changed to false
                 },
                 {
                     make: 'Toyota',
                     color: 'black',
                     year: 2004,
                     isDirty: false // stays the same
                 },
                 {
                     make: 'Ford',
                     color: 'white',
                     year: 2007,
                     isDirty: false // changed to false
                 }
             ]
    ```

// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
    ```js
         //Example Input: 
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
    ```

    ```js
       // Example Output (before refactor): 2
 
 
        // Example Output (after 1st refactor): 
        [
            'user1@email.com',
            'user2@email.com'
        ]
        
     
        // Example Output (after 2nd refactor): 
        [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             }
         ]

    ```

// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

    ```js
        //     Example Input:
        
         var breads  = [
             "white",
             "wheat",
             "rhy",
             "white"
         ];
        
         var fillings = [
             "pb&j",
             "ham",
             "cheese steak",
             "tuna"
         ];
        
         makeSandwichObjects(breads, fillings) // example call to the function 
    ```
    ```js
        // Example Output: 
           [
             {
                 bread: "white",
                 filling: "pb&j"
             },
             {
                 bread: "wheat",
                 filling: "ham"
             },
             {
                 bread: "rhy",
                 filling: "cheese steak"
             },
             {
                 bread: "white",
                 filling: "tuna"
             }
         ]

    ```