//Problem 6. Larger than neighbours
//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).

function biggerThanNeighbours(array, index) {
    var element = array[index];
    var previous = array[index - 1];
    var next = array[index + 1];

    console.log(array);
    console.log("Given position: " + index);
    console.log("Element at that position: " + element);

    //checks if the element has two surrounding elements
    if ((index > 0) && (index < array.length - 1)) {

        //checks if the element is bigger
        if (element > previous && element > next) {
            console.log("The element '" + element + "' is BIGGER than its two neighbours.");
        } else {
            console.log("The element '" + element + "' is NOT BIGGER than its two neighbours.");
        }

    } else {
        console.log("The element '" + element + "' doesn't have two neighbours.");
    }
}

//test array
//var arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 15];

var arr = [5, 78, 2, 5, 6, 87, 2, 6, 4, 64];
var position = 1;

biggerThanNeighbours(arr, position);