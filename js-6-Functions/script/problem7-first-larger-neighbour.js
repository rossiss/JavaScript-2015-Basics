//Problem 7. First larger than neighbours
//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
//Use the function from the previous exercise.
var problem7 = document.getElementById('problem7');

function biggerThanNeighbours(array, bool) {
    //searches between the second and the element before the last one
    for (var i = 1; i < array.length - 1; i += 1) {
        var currentNumber = array[i];
        var previousNumber = array[i - 1];
        var nextNumber = array[i + 1];

        //checks if the element is bigger and if true stops after the first found
        if (currentNumber > previousNumber && currentNumber > nextNumber) {
            bool = array.indexOf(currentNumber);
            break;
        } else {
            bool = -1;
        }
    }

    console.log(array);
    console.log("Index: " +  bool);
    problem7.innerHTML = ('Array: ' + array + "<br>The index of the first larger element than it's neighbours is " + bool)
}

var arr = [5, 78, 2, 5, 6, 87, 2, 6, 4, 64];
//test array
//var arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3];

biggerThanNeighbours(arr);