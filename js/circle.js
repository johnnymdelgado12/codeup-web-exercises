(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function area() {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return  Math.PI * Math.pow(this.radius, 2)// TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var returnMessage;
            if (doRounding === true){
                returnMessage = Math.round(this.getArea());
            } else {
                returnMessage=  this.getArea();
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + returnMessage);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
