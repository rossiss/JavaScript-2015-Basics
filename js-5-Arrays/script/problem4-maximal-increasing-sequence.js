//Problem 4. Maximal increasing sequence
//Write a script that finds the maximal increasing sequence in an array.
//Example: {3, 2, 3, 4, 2, 2, 4} --> {2, 3, 4}.

var problem4 = document.getElementById('problem4');

var arr = [3, 6, 6, 6, 2, 3, 4, 2, 2, 4];

MaximalIncreasingSequence(arr);

function MaximalIncreasingSequence(array) {
    var firstElement = 1,
        maxLength = 0,
        endIndex = 0,
        output = [],
        iOutput = 0;

    //check for increasing neighbour elements and counts their total number, else saves the current result
    for (var index = 0; index < array.length; index += 1) {
        if (array[index] < array[index + 1]) {
            firstElement += 1;
        } else {
            if (firstElement > maxLength) {
                maxLength = firstElement;
                endIndex = index;
            } else {
                firstElement = 1;
            }
        }
    }

    //establishes the maximal sequence of increasing elements
    if (firstElement > maxLength) {
        maxLength = firstElement;
        endIndex = array.Length - 1;
    } else {
        firstElement = 1;
    }

    //loop for the print
    for (var i = endIndex - maxLength + 1; i < endIndex + 1; i += 1) {
        output[iOutput] = array[i];
        iOutput += 1;
    }

    console.log("The maximal sequence of increasing elements is: " + output.join(', '));
    problem4.innerHTML = ("The maximal sequence of increasing elements is: " + output.join(', '));
}