//Problem 3. Maximal sequence
//Write a script that finds the maximal sequence of equal elements in an array.
//Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1} --> {2, 2, 2}.
var problem3 = document.getElementById('problem3');

var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

MaximalEqualSequence(arr);

function MaximalEqualSequence(array) {
    var maxLength = 1,
    	maxIndex = 0,
    	output = [];

    for (var index = 1, currentLength = 1; index < array.length; index += 1) {
        //if the two neighbour elements are equal then the current lenght of the equal sequence is expanded by 1
        currentLength = ((array[index - 1] === array[index]) ? (currentLength + 1) : (1));

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxIndex = index - currentLength + 1;
        }
    }

    for (var i = 0; i < maxLength; i += 1) {
    	output[i] = array[maxIndex + i];
    }

    console.log("The maximal sequence of equal elements in this array is: " + output.join(', '));
	problem3.innerHTML = ("The maximal sequence of equal elements in this array is: " + output.join(', '));
}
