(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    console.log(planetsArray);


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newString = planetsArray.join("<br>");

    console.log(newString);


    var listLoopString = '<ul>'
    planetsArray.forEach(function (planet) {
        listLoopString += '<li>';
            listLoopString += planet;
        listLoopString += '</li>'
    });
    listLoopString += '</ul>'
    console.log(listLoopString);

    var listString = '<li><li></li>' +planetsArray.join('</li><li>') + '</li></ul>';
    console.log(listString);


})();

//      .Push (“item”)== add an item to end of the array
//      .Unshift (“item”)== add item to the beginning of the array
//      .Pop (“item”)== remove last item of array, returns removed item
//      .Shift (“item”)== remove first item of array, returns removed item
//      .indexOf (“item”)== get the index of the specified item
//      .slice (start, finish)== remove designated portion of array
//      .reverse ()== reverse the array order
//      .sort ()== organized array by unicode value (alphabetically)
//      .split (separator) == string to array
//      .join (separator) == array to strings
